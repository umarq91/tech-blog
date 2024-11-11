"use client";

import { useParams } from "next/navigation";
import React from "react";
import BlogsData from "@/blogs.json";
import { motion } from "framer-motion";
import { FiCalendar, FiUser } from "react-icons/fi";

type BlogContent = {
  type: 'heading' | 'subheading' | 'paragraph';
  text: string;
};

type BlogPost = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  date: string;
  content: BlogContent[];
};

const BlogById: React.FC = () => {
  const { id } = useParams();
  const post = BlogsData.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center text-red-500">No Post Found</p>;

  return (
    <div className="max-w-3xl font-poppins mx-auto p-8 bg-white  rounded-lg mt-10 transition duration-500 transform  hover:shadow-3xl">
      {/* Cover Image */}
      <motion.div
        className="w-full h-64 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold mt-6 text-gray-900 leading-tight tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {post.title}
      </motion.h1>

      {/* Description */}
      <p className="mt-3 text-lg text-gray-600 italic border-l-4 border-purple-400 pl-4">
        {post.description}
      </p>

      {/* Author and Date */}
      <div className="flex items-center gap-6 mt-4 text-gray-500">
        <div className="flex items-center space-x-1">
          <FiUser className="text-purple-500" />
          <span className="font-semibold">{post.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiCalendar className="text-purple-500" />
          <span>{post.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8 text-gray-800">
        {post.content.map((item, index) => {
          switch (item.type) {
            case "heading":
              return (
                <motion.h2
                  key={index}
                  className="text-3xl font-semibold text-purple-700 mt-6 border-b-2 border-purple-300 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.h2>
              );
            case "subheading":
              return (
                <motion.h3
                  key={index}
                  className="text-2xl font-medium text-gray-700 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.h3>
              );
            case "paragraph":
            default:
              return (
                <motion.p
                  key={index}
                  className="text-lg leading-relaxed border-l-2 border-gray-200 pl-4 hover:border-purple-400 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.p>
              );
          }
        })}
      </div>
    </div>
  );
};

export default BlogById;
