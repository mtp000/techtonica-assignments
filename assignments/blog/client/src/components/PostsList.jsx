import React, { useState, useEffect } from "react";
import axios from 'axios';
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {posts.map((post) => (
                    <div
                        key={post.id} 
                        className="individual-post"
                        style={{
                            border: "1px solid #ddd",
                            padding: "16px",
                            borderRadius: "8px",
                            width: "200px",
                        }}>
                        <p>{post.title}</p>
                        <p>By: {post.author}</p>
                    </div>
                ))}
            </div>
        
        </>

    )
};

export default PostsList;