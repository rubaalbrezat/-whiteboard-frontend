import axios from 'axios';
import React, { useContext } from 'react';
import cookies from 'react-cookies';
import { RefreshContext } from '../contexs/RefreshProvider';
import {Input} from '@chakra-ui/react'

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
    <form onSubmit={addComment} className='form' m='50'>
      <Input type='text' id='newComment'  placeholder='Add your comment' required></Input>
      <Input type='submit' value='comment' ></Input>
    </form>
  )
}

export default CommentForm