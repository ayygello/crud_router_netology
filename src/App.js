import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomPostForm from './components/CustomAddForm/CustomPostForm';
import Feed from './components/Feed/Feed';
import axios from 'axios';
import Post from './components/Post/Post';

const App = () => {
  // Вариант 2, отправлять запрос подобным образом, но в таком случае в posts прилетает пустая строка и добавляется в массив

  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     axios.get('http://localhost:7777/posts').then((res) => {
  //       setPosts(res.data);
  //     });
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  // const addNewPost = (content) => {
  //   const addedPost = { content: content };

  //   axios.post('http://localhost:7777/posts', addedPost).then((res) => {
  //     console.log({ content });
  //     setPosts((prevPosts) => prevPosts.concat(res.data));
  //   });
  // };

  return (
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route
        path='/posts/new'
        element={<CustomPostForm /*onAdd={addNewPost}*/ />}
      />
      <Route path='/posts/:postId' element={<Post />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
