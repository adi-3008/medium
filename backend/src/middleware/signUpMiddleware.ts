import { signUpInput } from "@aditya34/common";

export const signUpMiddleware = async (c : any, next : any) => {
    try{
        const body = await c.req.json();
        console.log(body);
        let { success } = signUpInput.safeParse(body);
        console.log(success)
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

