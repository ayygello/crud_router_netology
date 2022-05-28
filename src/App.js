import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomPostForm from './components/CustomAddForm/CustomPostForm';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post';
import FeedProvider from './components/FeedProvider/FeedProvider';
import EditingPost from './components/EditingPost/EditingPost';

const App = () => {
  return (
    <FeedProvider>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/posts/new' element={<CustomPostForm />} />
        <Route path='/posts/:postId' element={<Post />} />
        <Route path='posts/edit/:postId' element={<EditingPost />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </FeedProvider>
  );
};

export default App;
