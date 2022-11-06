import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import d from './Posts.module.css'


const Posts = () => {

    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    },[id]);

    return (
        <div className={d.post}>
            {post && (
                <p>{post.body}</p>
            )}
        <Link to={`/blog/${id}/redact`}>Redact this post</Link>
        </div>
    )
}

export {Posts};