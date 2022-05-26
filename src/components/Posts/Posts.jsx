import React from 'react';
import moment from 'moment';
import './Posts.css';

const Posts = ({ created, content }) => {
  return (
    <div className='post-wrapper'>
      <div className='post-header'>
        <img
          className='avatar'
          src='https://oir.mobi/uploads/posts/2021-04/1619630471_41-oir_mobi-p-litso-kota-zhivotnie-krasivo-foto-44.jpg'
        />
        <div className='name-created'>
          <p className='header-content name'>
            Котик <br />
          </p>
          <p className='header-content created'>{moment(created).fromNow()}</p>
        </div>
      </div>
      <p className='post-content'>{content}</p>
      <div className='post-buttons-wrapper'>
        <button className='post-button'>👍 Нравится</button>
        <button className='post-button'>💬 Комментировать</button>
      </div>
      <div className='post-footer'>
        <img
          className='mini-avatar'
          src='https://oir.mobi/uploads/posts/2021-04/1619630471_41-oir_mobi-p-litso-kota-zhivotnie-krasivo-foto-44.jpg'
        />
        <div className='post-footer-input'>
          <input
            className='comment-input'
            type='text'
            placeholder='Напишите комментарй...'
          />
          <span className='action-footer'>🙂</span>
          <span className='action-footer'>📷</span>
          <span className='action-footer'>🎵</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
