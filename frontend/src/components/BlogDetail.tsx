import { Blog } from '../pages/Blogs'
import { Appbar } from './Appbar'
import { Avatar } from './Avatar'

export const BlogDetail = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar username='user'/>
        <div className='flex justify-center'>
            <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
                <div className="col-span-8 pr-6">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 font-medium pt-2 ">
                        Posted on November 5, 2024
                    </div>
                    <div className='pt-4 text-xl text-slate-700 font-medium'>
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='text-slate-600'>
                        Author
                    </div>
                    <div className='flex pt-2'>
                        <div className='flex flex-col justify-center'>
                            <Avatar name={blog.author.name || "User"}/>
                        </div>
                        <div className='pl-4'>
                            <div className='text-xl font-bold'>
                                {blog.author.name || "Unkown Author"}
                            </div>
                            <div className='text-lg text-slate-500'>
                                This is the information of author to attract users attention.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
}