import React from 'react';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList';


function App() {
    return (
        <div className="App">
            <h1>My Blog</h1>
            <AddPost />
            <PostList />
        </div>
    );
}

export default App;
