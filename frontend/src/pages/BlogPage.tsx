import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { BlogDetail } from "../components/BlogDetail";

export const BlogPage = () => {

    const { id } = useParams();

    const [loading, blog] = useBlog(id || "")

    if (loading){
        return <div>
            Loading...
        </div>
    }
    
    return <div>
        <BlogDetail blog={blog}/>
    </div>
}