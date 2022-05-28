import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomAddForm.css';
import FeedContext from '../../contexts/FeedContext';

const CustomPostForm = () => {
  const [content, setContent] = useState('');
  const { handleOnAdd } = useContext(FeedContext);

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
          <button
            className='publish-button'
            onClick={() => handleOnAdd(content)}
          >
            Опубликовать
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomPostForm;
