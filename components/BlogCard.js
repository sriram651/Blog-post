import Link from "next/link"

export default function BlogPost({ title, cover, username, avatar }) {
    console.log(username);
    return (
        <div className="w-80 h-80 mb-2 rounded-md border border-gray-400 shadow-md flex-col">
            <div className="h-10 border-b border-b-gray-400 p-2 pl-4 flex justify-start items-center">
                <img src={avatar} width={16} height={16} className="rounded-full"></img>
                <p className="ml-2 text-sm font-semibold">{username}</p>
            </div>
            <div className="h-52 overflow-clip">
                <img src={cover} width={200} height={300} className="fit-content"></img>
            </div>
            <div className="h-6 p-1 border-t border-t-gray-400 flex items-center">
                <span className="ml-2 mr-1 text-sm font-semibold">{username}</span>
                <span className="text-xs align-bottom">{title}</span>
            </div>
        </div>
    )
}