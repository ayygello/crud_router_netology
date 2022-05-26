import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CustomAddForm.css';

const CustomPostForm = () => {
  const [content, setContent] = useState('');

  const newPost = () => {
    axios
      .post('http://localhost:7777/posts', content)
      .then((res) => console.log(res));
  };

  return (
    <div className='wrapper single-post'>
      <div className='form-wrapper'>
        <Link to={'*'}>
          <button className='close-button'>×</button>
        </Link>
        <div className='textarea-wrapper'>
          <div className='circle'></div>
          <textarea
            type='text'
            value={content}
            placeholder='Что у Вас нового...'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Link to={'*'}>
          <button className='publish-button' onClick={newPost}>
            Опубликовать
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomPostForm;
