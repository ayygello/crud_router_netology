import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FeedContext from '../../contexts/FeedContext';
import './EditingPost.css';

const EditingPost = () => {
  const { feed, handleOnUpdate } = useContext(FeedContext);
  const { postId } = useParams();

  const post = feed[postId];

  const [updatedPost, setUpdatedPost] = useState({
    content: post.content,
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setUpdatedPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  return (
    <div className='wrapper single-post'>
      <div className='edit-wrapper'>
        <div className='edit-header'>
          <p className='h-c'>Редактировать публикацию</p>
          <Link to={'*'}>
            <button className='close-button cancel-edit'>×</button>
          </Link>
        </div>
        <div className='edit-content'>
          <img
            className='avatar edit-avatar'
            src='https://oir.mobi/uploads/posts/2021-04/1619630471_41-oir_mobi-p-litso-kota-zhivotnie-krasivo-foto-44.jpg'
            alt='avatar'
          />
          <textarea
            type='text'
            name='content'
            value={updatedPost.content}
            onChange={handleOnChange}
          />
        </div>
        <div className='action-wrapper'>
          <button className='edit-action'>Фото/видео</button>
          <button className='edit-action'>Отметить друзей</button>
          <button className='edit-action'>Чувства/действия</button>
          <button className='edit-action'>Отметить посещение</button>
        </div>
        <div className='footer'>
          <Link to={'*'}>
            <button
              className='publish-button'
              onClick={() => handleOnUpdate(post.id, updatedPost.content)}
            >
              Сохранить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditingPost;
