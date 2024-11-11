import Image from 'next/image';
import React from 'react';
import BlogsData from '@/blogs.json';
import Link from 'next/link';

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

                    {/* Other Blogs Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Card 1 */}
                        {BlogsData.map((blog)=>(
                          
                            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <div className='h-48 relative'>
                                <Image 
                                    src={blog?.coverImage}
                                    layout='fill'
                                    alt='Blog Image 1'
                                    className='object-cover'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg font-bold'>{blog.title}</h3>
                                <p className='text-gray-700 text-sm mt-2 line-clamp-3'>
                                   {blog.description}
                                </p>
                                <Link href={`/blogs/${blog.id}`} >
                                <button className='mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-900'>
                                    Read Post
                                </button>
                                </Link>
                            </div>
                        </div>
                        ))}
                        

              
                   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
