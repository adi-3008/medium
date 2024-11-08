import { User } from "@prisma/client/edge";
import { Hono } from "hono"
import { sign } from "hono/jwt";
import { getPrismaClient } from "../client/PrismaClient";
import { signUpMiddleware } from "../middleware/signUpMiddleware";
import { signInMiddleware } from "../middleware/signInMiddleware";

const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
    },
    Variable : {
        parsedBody : any
    }
}>();

userRouter.use('/signUp', signUpMiddleware);
userRouter.use('/signIn', signInMiddleware);

userRouter.post('/signUp', async (c : any) => {
    try{
        const prismaClient = getPrismaClient(c.env.DATABASE_URL)
    
        const body = c.get("parsedBody");

        const user : User = await prismaClient.user.create({
            data : {
                email : body.email,
                password : body.password,
                name : body.name
            }
        })
        
        const token = await sign({ id : user.id }, "secret")

        return c.json({
            jwt : token
        })

    }catch(error : any){
        c.status(500);
        return c.json({
            msg : error.message
        })

    }
})

userRouter.post('/signIn', async (c : any) => {
    try{
        const prismaClient = getPrismaClient(c.env.DATABASE_URL)

        const body = await c.req.json();
    
        const user = await prismaClient.user.findUnique({
            where : {
                email : body.email,
                password : body.password 
            }
        })
    
        if(!user){
            c.status(403);
            return c.json({error : "user not found"})
        }
        
        const token = await sign({ id : user.id }, "secret")
    
        return c.json({
            jwt : token
        })

    }catch(e : any){
        c.status(500);
        return c.json({
            msg : "Internal Server Error"
        })
    }
})

export { userRouter };
