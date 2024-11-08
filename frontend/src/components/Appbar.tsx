import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

export const Appbar = ({ username } : { username : string }) => {
    return <div className="flex justify-between px-6 py-2 border-b border-slate-200">
        <div className="font-serif text-3xl font-medium cursor-pointer">
            <Link to={`/blogs`}>
                Medium
            </Link>
        </div>
        <div className="flex">
            <Link to={`/publish`}>
                <div className="flex flex-col justify-center">
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                </div>
            </Link>
            <div className="flex flex-col justify-center ml-2">
                <Avatar name={username[0]}/>
            </div>
        </div>
    </div>
}
