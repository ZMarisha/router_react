import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, []);

    let handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let searchPost = form.search.value;
        setSearchParams({post: searchPost});
    }

    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type='search' name='search' />
                <input type='submit' value='Search'/>
            </form>
            <Link to='/blog/newpost'>Create new post</Link>
            <h1>Blog</h1>
            <div>
            {posts.filter(post => post.title.includes(postQuery)).map(post => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Blog;