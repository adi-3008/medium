import React from "react"

export const Quote = React.memo(({text, author, designation} : {text : string, author : string, designation : string }) => {
    return <div className='bg-slate-200 h-screen flex flex-col justify-center'>
        <div className="flex justify-center m-2 ">
            <div className="max-w-md ">
                <div className="text-3xl font-bold mb-4">
                    {text}
                </div>
                <div className="text-xl font-medium">
                    {author}
                </div>
                <div className="text-sm font-light text-slate-400">
                    {designation}
                </div>
            </div>
        </div>
    </div>
})