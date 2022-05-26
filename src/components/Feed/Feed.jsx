import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import initialValues from '../../initialValues/initialValues';
import NewPostButton from '../NewPostButton/NewPostButton';
import Posts from '../Posts/Posts';
import './Feed.css';

const Feed = () => {
  const [feed, setFeed] = useState(initialValues);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios.get('http://localhost:7777/posts').then((res) => {
        setFeed(res.data);
      });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // const addNewPost = (post) => {
  //   const addedPost = { post: post };

  //   axios.post('http://localhost:7777/posts', addedPost).then((res) => {
  //     setFeed((prevFeed) => prevFeed.concat(res.data));
  //   });
  // };

  return (
    <div className='wrapper'>
      <NewPostButton />
      <div>
        {Object.entries(feed).map(([postId, post]) => (
          <Link to={`/posts/${postId}`} style={{ textDecoration: 'none' }}>
            {' '}
            <Posts
              key={postId}
              content={post.content}
              created={post.created}
            />{' '}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feed;
