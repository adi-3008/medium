import { Hono } from "hono";
import { authMiddleware } from "../middleware/authMiddleware";
import { getPrismaClient } from "../client/PrismaClient";

const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
    },
    Variables : {
        userId : string;
    }
}>();

blogRouter.use("/*", authMiddleware);

blogRouter.post("/", async (c) => {
    const body = await c.req.json();

    const prismaClient = getPrismaClient(c.env.DATABASE_URL);

    const blog = await prismaClient.blog.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : c.get("userId")
        }
    })

    return c.json({
        id : blog.id
    })
})

blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const prismaClient = getPrismaClient(c.env.DATABASE_URL);

    const blog = await prismaClient.blog.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content,
        }
    })

    return c.json({
        id : blog.id
    })
})

blogRouter.get("/bulk", async (c) => {

    console.log("aditya");

    const prismaClient = getPrismaClient(c.env.DATABASE_URL);

    const blogs = await prismaClient.blog.findMany({
        select : {
            content : true,
            id : true,
            title : true,
            author : {
                select : {
                    name : true
                }
            }
        }        
    });

    return c.json({
        blogs : blogs
    })
})

blogRouter.get("/:id", async (c) => {
    const prismaClient = getPrismaClient(c.env.DATABASE_URL);
    const id = c.req.param("id");
    
    const blog = await prismaClient.blog.findFirst({
        where : {
            id : id
        },
        select : {
            id : true,
            title : true,
            content : true,
            author : {
                select : {
                    name : true
                }
            }
        }
    });

    return c.json({
        blog : blog
    })
})


export default blogRouter;