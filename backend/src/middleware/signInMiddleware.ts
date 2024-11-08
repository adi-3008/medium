import { signInInput } from "@aditya34/common";

export const signInMiddleware = async (c : any, next : any) => {
    try{
        const body = await c.req.json();
        let { success } = signInInput.safeParse(body);
        if (success){
            c.set("parsedBody", body);
            await next();
        }else{
            c.status(400);
            return c.json({
                msg : "Bad Request"
            })
        }
    }catch(Error : any){
        c.status(400);
        return c.json({
            msg : "Bad Request"
        })
    }
}

