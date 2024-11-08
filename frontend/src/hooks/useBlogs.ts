import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import axios from "axios";
import { Blog } from '../pages/Blogs'

export const useBlogs : () => [ loading : boolean, blogs : Blog[] ] = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        try{
            const headers = { "authorization" : "Bearer " + localStorage.getItem("token") }
            axios.get(`${BASE_URL}/api/v1/blog/bulk`, { headers })
            .then((res) => {
                setBlogs(res.data.blogs)
                setLoading(false);
            })
        }catch (e){
            console.log("error fetching while fetching blogs");
        }
    }, [])

    return [
        loading,
        blogs
    ]
}