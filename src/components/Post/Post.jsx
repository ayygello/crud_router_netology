import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import './Post.css';
import FeedContext from '../../contexts/FeedContext';

const Post = () => {
  const { feed, handleOnDelete } = useContext(FeedContext);
  const { postId } = useParams();

  const post = feed[postId];

  return (
    <div className='wrapper single-post'>
      <div className='post-wrapper'>
        <div className='post-header'>
          <img
            className='avatar'
            src='https://oir.mobi/uploads/posts/2021-04/1619630471_41-oir_mobi-p-litso-kota-zhivotnie-krasivo-foto-44.jpg'
            alt='avatar'
          />
          <div className='name-created'>
            <p className='header-content name'>
              Котик <br />
            </p>
            <p className='header-content created'>
              {moment(post.created).fromNow()}
            </p>
          </div>
        </div>
        <p className='post-content'>{post.content}</p>
        <div className='post-buttons-wrapper'>
          <button className='post-button'>👍 Нравится</button>
          <button className='post-button'>✉ Комментировать</button>
        </div>
        <div className='actions-wrapper'>
          <Link to={`/posts/edit/${postId}`}>
            <button className='action-button change'>Изменить</button>
          </Link>
          <Link to={'*'}>
            {' '}
            <button
              className='action-button delete'
              onClick={() => handleOnDelete(post.id)}
            >
              Удалить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
