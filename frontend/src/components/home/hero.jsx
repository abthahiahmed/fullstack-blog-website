export default function Hero(){
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto flex min-h-[400px] items-center">
                <div className="w-full text-center">
                    <h1 className="text-5xl font-medium mb-5">ViteBlog : The story of technical knowledges</h1>
                    <p className="text-xl text-gray-600 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ullam porro distinctio asperiores!</p>

                    <div className="max-w-md mx-auto border border-gray-300 flex p-1 rounded-md">
                        <input type="email" className="px-3 py-1.5 pr-1 outline-none grow placeholder-gray-600" placeholder="Enter Your Email"/>
                        <button className="px-3 py-1.5 bg-gray-900 text-white rounded-md">Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    )
}