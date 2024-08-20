import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog : Blog}) => {
  return (
    <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10  w-full max-w-screen-xl">
                <div className=" col-span-8 ">
                    <div className="text-4xl font-extrabold pt-12">
                        {blog.title}
                    </div>
                    <div className=" text-slate-500 pt-2">
                        Posted on 2nd December
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>

                <div className=" col-span-4 pt-12">
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="small" name = {blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-slate-600">
                                Author
                            </div>
                            <div className="text-2xl font-bold">
                            {blog.author.name || "Anonymous"}
                            </div>
                            
                            <div className="pt-2 text-slate-500">
                            Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
