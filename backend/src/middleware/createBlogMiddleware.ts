import { createBlogInput } from "@aditya34/common";

export const createBlogMiddleware = async (c : any, next : any) => {
    try{
        const body = await c.req.json();
        let { success } = createBlogInput.safeParse(body);
        if (success){
            c.set("parsedBody", body);
            await next();
        }else{
            c.status(400);
            return c.json({
                msg : "Bad Request"
            })
        }
    }catch(error : any){
        c.status(400);
        return c.json({
            msg : "Bad Request"
        })
    }
}