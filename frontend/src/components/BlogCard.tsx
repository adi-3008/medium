import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    id: string,
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
        id,
        authorName,
        title,
        content,
        publishedDate
} : BlogCardProps) => {
    return <div className="border-b border-slate-100 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar name={authorName}/>
            <div className="flex flex-col justify-center">
                <div className="font-extralight pl-2 text-sm">{authorName}</div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-thin pl-2 text-slate-600 text-sm">{publishedDate}</div>
            </div>
        </div>
        <Link to={`/blog/${id}`}>
            <div className="text-2xl font-extrabold hover:underline">{title.length > 50 ? title.slice(0, 100) + "..." : title}</div>
        </Link>
        <div className="text-md font-[400] text-[#6B6B6B]">{content.length > 200 ? content.slice(0, 200) + "..." : content}</div>
        <div className="text-sm text-slate-500 font-thin">2 minute read</div>
    </div>
}

