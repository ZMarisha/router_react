import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Blog</h1>
            <div>
            {posts.map(post => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Blog;