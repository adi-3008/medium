import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

let prismaClient : any = null;

export const getPrismaClient = (datasourceUrl : string) : any => {
    if (prismaClient == null){
        prismaClient = new PrismaClient({
            datasourceUrl : datasourceUrl
        }).$extends(withAccelerate());
    }
    return prismaClient;
} 