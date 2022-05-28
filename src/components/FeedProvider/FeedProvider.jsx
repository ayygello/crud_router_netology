import React from 'react';
import FeedContext from '../../contexts/FeedContext';
import useGetData from '../../hooks/useGetData';
import axios from 'axios';

const FeedProvider = (props) => {
  const [feed, loading] = useGetData('http://localhost:7777/posts', []);

  const handleOnAdd = (content) => {
    const addedPost = { content: content, id: 0 };

    axios.post('http://localhost:7777/posts', addedPost);
  };

  const handleOnDelete = (id) => {
    axios.delete(`http://localhost:7777/posts/${id}`);
  };

  const handleOnUpdate = (id, content) => {
    const updatedPost = { id: id, content: content };

    axios.post('http://localhost:7777/posts', updatedPost);
  };

  return (
    <FeedContext.Provider
      value={{ feed, loading, handleOnAdd, handleOnDelete, handleOnUpdate }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
