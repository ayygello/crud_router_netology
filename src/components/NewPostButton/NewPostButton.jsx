import React from 'react';
import { Link } from 'react-router-dom';
import './NewPostButton.css';

const NewPostButton = ({ to }) => {
  return (
    <div className='new-post-wrapper'>
      <Link to={'/posts/new'} style={{ textDecoration: 'none' }}>
        <button className='new-post-button' onClick={to}>
          Создать пост
        </button>
      </Link>
    </div>
  );
};

export default NewPostButton;
