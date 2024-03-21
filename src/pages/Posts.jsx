import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BlogPosts } from '../data/data'

export function PostLists() {
    return (
        // <ul>
        //     {Object.entries(BlogPosts).map(([slug, { title }]) => (
        //         <li key={slug}>
        //             <Link to={`/posts/${slug}`}>
        //                 <h3>{title}</h3>
        //             </Link>
        //         </li>
        //     ))}
        // </ul>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Object.entries(BlogPosts).map(([slug, { title, description }]) => (
                <article key={slug} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link to={`/posts/${slug}`}>
                                <span className="absolute inset-0" />
                                {title}
                            </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export function Posts() {
    return (
        // <div style={{ margin: 20 }}>
        //     <h2>Blog</h2>
        //     <Outlet />
        // </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid place-items-center">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
