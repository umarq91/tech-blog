import Image from 'next/image';
import React from 'react';

function Blogs() {
    return (
        <div className='min-h-screen max-w-6xl mx-auto p-4 md:p-10 font-montserrat'>
            {/* Top Section */}
            <div>
                <hr className='border border-gray-600 my-4' />

                <div className='content my-6'>
                    <p className="text-sm font-montserrat tracking-wider text-gray-800 uppercase">
                        • Introducing
                    </p>
                    <h1 className='font-bold text-2xl md:text-4xl'>
                        Blogs: Insights, Software Development, Tech News
                    </h1>
                    <p className='text-gray-600 mt-2'>
                        Subscribe for the latest blogs, tech news, and insights from the experts.
                    </p>
                </div>

                <hr className='border border-gray-600 my-4' />
            </div>

            {/* Main Section */}
            <div className='flex flex-col md:flex-row md:mt-10'>
                {/* Sidebar with Categories */}
                <div className='md:w-1/4 mb-10 md:mb-0'>
                    <h3 className='text-xl font-semibold mb-4'>This Page Includes:</h3>
                    <ul className='space-y-3 text-gray-700'>
                        <li className='cursor-pointer hover:underline'>Tech News</li>
                        <li className='cursor-pointer hover:underline'>Software Development</li>
                        <li className='cursor-pointer hover:underline'>Industry Insights</li>
                        <li className='cursor-pointer hover:underline'>Product Reviews</li>
                        <li className='cursor-pointer hover:underline'>Web Development</li>
                    </ul>
                </div>

                {/* Blog Content */}
                <div className='md:w-3/4'>
                    {/* Latest Blog */}
                    <div className='flex flex-col md:flex-row h-auto md:h-96 mb-10'>
                        {/* Image Section */}
                        <div className='w-full md:w-1/2 h-64 md:h-full relative'>
                            <Image
                                src="https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg"
                                layout='fill'
                                objectFit='cover'
                                alt='cover'
                            />
                        </div>

                        {/* Content Section */}
                        <div className='flex-1 p-4 md:p-7'>
                            <h2 className='text-2xl md:text-3xl font-bold'>
                                The Future of Web Development: Trends and Technologies for 2024
                            </h2>
                            <p className='text-gray-700 text-sm md:text-md mt-4 line-clamp-5'>
                                In this blog, we explore the emerging trends and technologies that will shape the future of web development in 2024. From the latest frameworks and tools to the rise of Web3, AI integration, and low-code platforms, this article provides insights into how developers and businesses can stay ahead in the fast-paced tech industry.
                            </p>

                            {/* Uploaded By Section */}
                            <div className='mt-5 flex items-center'>
                                <Image
                                    src="https://ecw.com/thmb/LZFpFJI6FX0LUZj9xlpSCzZAKno=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gillian-flynn_320-731254fa87bf411cb4ad799d64fc23f5.jpg"
                                    width={50}
                                    height={50}
                                    alt='author'
                                    className='rounded-full object-cover'
                                />
                                <div className='ml-3'>
                                    <p className='text-sm font-bold'>Gillian Flynn</p>
                                    <p className='text-sm text-gray-500'>Feb 24, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='border border-gray-300 my-10' />

                    {/* Other Blogs Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Card 1 */}
                        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <div className='h-48 relative'>
                                <Image 
                                    src={"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg"}
                                    layout='fill'
                                    alt='Blog Image 1'
                                    className='object-cover'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg font-bold'>The Rise of AI in Web Development</h3>
                                <p className='text-gray-700 text-sm mt-2 line-clamp-3'>
                                    Artificial intelligence is transforming the landscape of web development, offering innovative ways to automate, enhance, and improve user experiences.
                                </p>
                                <button className='mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-900'>
                                    Read Post
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <div className='h-48 relative'>
                                <Image 
                                    src={"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg"}
                                    layout='fill'
                                    alt='Blog Image 2'
                                    className='object-cover'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg font-bold'>Why Web3 Matters for Developers</h3>
                                <p className='text-gray-700 text-sm mt-2 line-clamp-3'>
                                    Discover how Web3 technologies are decentralizing the internet, creating new opportunities and challenges for developers.
                                </p>
                                <button className='mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-900'>
                                    Read Post
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <div className='h-48 relative'>
                                <Image 
                                    src={"https://st4.depositphotos.com/10208782/25036/i/450/depositphotos_250363866-stock-photo-woman-using-laptop-computer.jpg"}
                                    layout='fill'
                                    alt='Blog Image 3'
                                    className='object-cover'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg font-bold'>How Low-Code Platforms Are Disrupting Development</h3>
                                <p className='text-gray-700 text-sm mt-2 line-clamp-3'>
                                    Low-code platforms enable rapid application development, democratizing the process and empowering non-developers to build functional applications.
                                </p>
                                <button className='mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-900'>
                                    Read Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
