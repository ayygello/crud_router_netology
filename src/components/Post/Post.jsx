import React, { useEffect, useState } from 'react';
import './Post.css';
import moment from 'moment';
import 'moment/locale/ru';
import { Link, useParams } from 'react-router-dom';
import initialValues from '../../initialValues/initialValues';

const Post = () => {
  // const [post, setPost] = useState(null);
  const { postId } = useParams();

  const post = initialValues[postId];

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     axios.get(`http://localhost:7777/posts/${postId}`).then((res) => {
  //       setPost(res.data);
  //     });
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <div className='wrapper single-post'>
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
          <button className='action-button change'>Изменить</button>
          <Link to={'*'}>
            {' '}
            <button className='action-button delete'>Удалить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
