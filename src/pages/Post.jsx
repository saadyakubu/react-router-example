import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { BlogPosts } from '../data/data';

export function Post() {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    if (!post) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }

    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
