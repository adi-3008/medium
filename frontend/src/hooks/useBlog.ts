import axios from "axios"
import { BASE_URL } from "../../config"
import { useEffect, useState } from "react"
import { Blog } from '../pages/Blogs'

export const useBlog : (id : string) => [loading : boolean, blog : Blog] = (id : string) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<Blog>({
        id : "",
        content : "",
        title: "",
        author : {
            name : ""
        }
    });
    
    useEffect(() => {
        axios.get(`${BASE_URL}/api/v1/blog/${id}`, {
            headers : {
                "authorization" : "Bearer " + localStorage.getItem("token") 
            }
        }).then((res) => {
            setBlog(res.data.blog)
            setLoading(false)   
        })
    }, [id])

    return [
        loading,
        blog
    ];
}