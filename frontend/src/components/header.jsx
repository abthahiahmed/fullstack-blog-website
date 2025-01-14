import { Link } from "react-router";

export default function Header(){
    return (
        <nav className="w-full bg-gray-800 p-4 sticky top-0">
            <div className="max-w-screen-xl mx-auto flex items-center">
                <div className="me-12 flex gap-2 items-center">
                    <img src="/vite.svg" width={36}/>
                    <label className="text-white text-lg">ViteBlog</label>
                </div> 
                <div>
                    <ul className="flex gap-3 items-center">
                        <li>
                            <Link to={'/'} className="text-gray-300 hover:text-gray-50">Home</Link>
                        </li>
                        <li>
                            <Link to={'/posts'} className="text-gray-300 hover:text-gray-50">All Posts</Link>
                        </li>
                        <li>
                            <input type="text" className="px-3 py-1.5 bg-gray-700 rounded-md outline-none focus:ring-2 ring-blue-500 text-white" placeholder="Search Posts"/>
                        </li>
                    </ul>
                </div> 
                <div className="ms-auto">
                    <Link to={'/contact'} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">Contact Us</Link>
                </div> 
            </div>
        </nav>
    )
}