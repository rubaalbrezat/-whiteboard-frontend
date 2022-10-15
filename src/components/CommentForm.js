import axios from 'axios';
import React, { useContext } from 'react';
import cookies from 'react-cookies';
import { RefreshContext } from '../contexs/RefreshProvider';

function CommentForm({ postID }) {

  const { refreshMain, setRefreshMain } = useContext(RefreshContext);

  async function addComment(e) {
    e.preventDefault();        
    const userID = cookies.load('_id');
    const url = `${process.env.REACT_APP_SERVER}/comment/${postID}/${userID}`;
    const comment = {
      content: e.target.newComment.value
    };
    const axiosResponse = await axios.post(url, comment);
    const allComments = axiosResponse.data;
    setRefreshMain(pre => pre + 1);
    e.target.newComment.value = '';
  }

  return (
    <form onSubmit={addComment} className='form'>
      <input type='text' id='newComment'  placeholder='Add your comment' required></input>
      <input type='submit' value='comment' ></input>
    </form>
  )
}

export default CommentForm