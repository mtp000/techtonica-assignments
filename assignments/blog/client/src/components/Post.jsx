import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Post() {
    const { id }  = useParams(); //what does this do?
    const [post, setPost] = useState(null);

    //when page loads, fetchPost function is called
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching fost:", error);
            }    
        };
        fetchPost();
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <>
            <h2>{post.title}</h2>
            <p>By: {post.author}</p>
            <p>Sentiment Score: {post.sentimentScore}</p>
            <p>{post.content}</p>
        </>
    )
};

export default Post;