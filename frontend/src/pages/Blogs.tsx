import { useBlogs } from "../hooks/useBlogs"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    const [loading, blogs] = useBlogs();

    if(loading){
        return <div>Loading...</div>
    }

    return <div>
        <div className="border-b border-slate-300">
            <Appbar username={localStorage.getItem("username") || "U"}/>
        </div>
        <div className="flex justify-center">
                <div>
                    {
                        blogs.map(
                            (blog : Blog) => 
                                <BlogCard 
                                    id = {blog.id} 
                                    authorName ={(blog.author !== null && blog.author.name !== null) ? blog.author.name : "Unknown Author"} 
                                    title = {blog.title}
                                    content={blog.content}
                                    publishedDate={"no date"}
                                />
                        )
                    }
                </div>
        </div>
    </div>
}

export interface Blog {
    id : string;
    content : string;
    title: string;
    author : {
        name : string
    }
}