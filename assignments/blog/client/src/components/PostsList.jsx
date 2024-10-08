import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./postList.css"
//import Post from "./Post";

function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                console.log("Fetched posts:", response.data);
                setPosts(response.data)
            } catch (error) {
                console.error("Error fetching all posts:", error);
            }    
        };
        fetchPosts(); 
    }, []);

    if (!posts.length) return <p>Loading...</p>;

    return (
        <>
         {/**Map through array of posts and for each post, display it on a Post card. */}
            <div className="posts-container">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/posts/${post.id}`} // links to show each post invidually with content
                    >
                        <div
                            className="individual-post">
                            <p>{post.title}</p>
                            <p>By: {post.author}</p>
                        </div>
                    </ Link>
                ))}
            </div>
        
        </>

    )
};

export default PostsList;