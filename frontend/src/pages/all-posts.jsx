export default function AllPosts(){
    return (
        <div className="w-full p-3 my-12">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-xl font-medium mb-6">All Blog Posts</h1>


                <div className="grid grid-cols-3 gap-6">
                    {
                    [1, 2, 3, 4, 5, 6].map((item)=>(
                        <div key={item}>
                            <img src="/thumbnails/astro.jpg" className="w-full object-cover mb-3 rounded-2xl"/>
                            <label className="mb-2 block text-sm">Ishmam - 13 Jan, 2025</label>
                            <h2 className="text-xl font-medium mb-2">This is post title</h2>
                            <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae temporibus voluptates earum nobis nihil laboriosam tempore facere assumenda, veniam totam aliquam similique inventore distinctio exercitationem? Nam aspernatur in consectetur!</p>
                            <div className="flex gap-3">
                                <a className="post-tag">Astro</a>
                                <a className="post-tag">Design</a>
                                <a className="post-tag">Blogging</a>
                            </div>
                        </div>
                    ))
                    }

                    
                </div>

            </div>
            
        </div>
    )
}