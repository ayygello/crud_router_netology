import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FeedContext from '../../contexts/FeedContext';
import NewPostButton from '../NewPostButton/NewPostButton';
import Posts from '../Posts/Posts';
import './Feed.css';

const Feed = () => {
  const { feed, loading } = useContext(FeedContext);

  return (
    <div className='wrapper'>
      <NewPostButton />
      <div>
        {(loading && <progress />) ||
          Object.entries(feed).map(([postId, post]) => (
            <Link
              to={`/posts/${postId}`}
              key={postId}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              <Posts content={post.content} created={post.created} />{' '}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Feed;
