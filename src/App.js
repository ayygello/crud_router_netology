import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import CustomPostForm from './components/CustomAddForm/CustomPostForm';
import Feed from './components/Feed/Feed';
import axios from 'axios';
import Post from './components/Post/Post';

const App = () => {
  // const [posts, setPosts] = useState(null);
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get('id');

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
      <Route path='/posts/new' element={<CustomPostForm />} />
      <Route path='/posts/:postId' element={<Post />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default App;
