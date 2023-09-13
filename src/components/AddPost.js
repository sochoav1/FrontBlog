// frontend/src/components/AddPost.js

import axios from 'axios';
import React, { useState } from 'react';

function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/posts', { title, content })
            .then(() => {
                setTitle('');
                setContent('');
                alert('Post added successfully!');
            })
            .catch(error => {
                console.error("Error adding the post!", error);
            });
    };

    return (
        <div className="mb-4">
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddPost;
