export default function RecentPosts(){
    return (
        <div className="w-full my-12">

            <div className="max-w-screen-xl mx-auto">
                <h3 className="text-2xl font-medium mb-6">Recent Blog Posts</h3>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <div>
                            <img src="/thumbnails/astro.jpg" className="w-full object-cover mb-3 rounded-2xl"/>
                            <label className="mb-2 block text-sm">Ishmam - 13 Jan, 2025</label>
                            <h2 className="text-xl font-medium mb-2">This is post title</h2>
                            <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae temporibus voluptates earum nobis nihil laboriosam tempore facere assumenda, veniam totam aliquam similique inventore distinctio exercitationem? Nam aspernatur in consectetur!</p>
                            <div className="flex gap-3">
                                <a className="inline-block px-2 py-1 border border-gray-600 rounded-full text-sm">Astro</a>
                                <a className="inline-block px-2 py-1 border border-gray-600 rounded-full text-sm">Design</a>
                                <a className="inline-block px-2 py-1 border border-gray-600 rounded-full text-sm">Blogging</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <div className="">
                                    <img src="/thumbnails/astro.jpg" className="w-[200px] h-full object-cover mb-3 rounded-2xl"/>
                                </div>
                                <div className="grow p-2">
                                    <label className="mb-2 block text-sm">Ishmam - 13 Jan, 2025</label>
                                    <h2 className="text-xl font-medium mb-2">This is post title</h2>
                                    <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex gap-3">
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Astro</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Design</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Blogging</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <img src="/thumbnails/astro.jpg" className="w-[200px] h-full object-cover mb-3 rounded-2xl"/>
                                </div>
                                <div className="grow p-2">
                                    <label className="mb-2 block text-sm">Ishmam - 13 Jan, 2025</label>
                                    <h2 className="text-xl font-medium mb-2">This is post title</h2>
                                    <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex gap-3">
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Astro</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Design</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Blogging</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <img src="/thumbnails/astro.jpg" className="w-[200px] h-full object-cover mb-3 rounded-2xl"/>
                                </div>
                                <div className="grow p-2">
                                    <label className="mb-2 block text-sm">Ishmam - 13 Jan, 2025</label>
                                    <h2 className="text-xl font-medium mb-2">This is post title</h2>
                                    <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex gap-3">
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Astro</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Design</a>
                                        <a className="inline-block px-2 py-0.5 border border-gray-600 rounded-full text-sm">Blogging</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}