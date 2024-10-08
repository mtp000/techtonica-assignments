import React, { useState } from "react";
import axios from 'axios';

function PostForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/posts/write", {
                title,
                author,
                content,
            });
            setSuccessMessage("Post created successfully!");
            setErrorMessage(""); // Clear any previous error message
            setTitle("");
            setAuthor("");
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
            setErrorMessage("Failed to create post. Please try again.");
            setSuccessMessage(""); // Clear any previous success message
        }
    };

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <button className="header-button" type="submit">Publish</button>
                <div className="input-box" required>
                    <input 
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Author (optional)"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                
                <div className="text-box" required>
                    <textarea
                        value={content}
                        placeholder="Tell your story..."
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
            </form>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </>
    );
};

export default PostForm;