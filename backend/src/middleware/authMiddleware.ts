import {verify} from 'hono/jwt'

export const authMiddleware =  async(c : any, next : any) => {
    
    try{
        const authHeader : string = c.req.header("authorization") || "";
    
        if(!authHeader){
            c.status(403);
            return c.json({
                msg : "invalid token"
            }
        )}
        console.log(authHeader);
        const token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : "";
        console.log(token);
        const user = await verify(token, "secret");
        console.log(user);  
        if(user){
            c.set("userId", user.id)
            await next();
            console.log("no error");
        }else{
            c.status(403);
            return c.json({
                    msg : "Invalid JWT"
                }
            )
        }
    }catch(error : any){
        c.status(403);
        return c.json({
                msg : "unauthorized"
            }
        )
    }
}