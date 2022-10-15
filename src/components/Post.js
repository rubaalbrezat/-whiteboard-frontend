import axios from 'axios';
import React, { useContext, useState } from 'react';
import CommentForm from './CommentForm';
import CommentsHolder from './CommentsHolder';
import { RefreshContext } from '../contexs/RefreshProvider';
import Modal from '../components/Modal'
import cookies from 'react-cookies';
import { ControlLabel } from 'react-bootstrap';

function Post({ postData }) { //postData = {id='', title = '',content='',userId='',comments=[]}

  const { refreshMain, setRefreshMain } = useContext(RefreshContext);
  const role = cookies.load("role");

  const [showModal , setShowModal]= useState(false)

  function deletePost() {

    var flage = window.confirm("are you sure you are gonna delte the post and will not  retreive it ?");

    if(!flage)
    return;
    const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
    const token = cookies.load("token");
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.delete(url, bearer)
      .then(resolved => setRefreshMain(pre => pre + 1))
      .catch(reject => alert(reject.response.data));

  
    }

     function updatePost(title ,content) {
      
      console.log(title,content)


      const token = cookies.load("token");
      const bearer = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
      const body = {
        title,content
      };
       axios.put(url, body, bearer).then(result=>{
        console.log(result.data)
        setShowModal(false)
        window.location.reload();
       }).catch(console.log)

      }
    



  return (
    <div className='pos'>
      {showModal &&
      <Modal updatePost={updatePost}  setShowModal={setShowModal} showModal={showModal} />

      }
      {(role === "admin" ||postData?.userId === cookies.load("_id") ) &&
      <>
      <button onClick={deletePost} >delete</button>
      <button onClick={()=>setShowModal(true)} >Update</button>
      </>
      }
      <h4>{postData.title}</h4>
      <hr></hr>
      <p>{postData.content}</p>
      {postData.comments.length?<CommentsHolder comments={postData.comments} />:<p >Add the first comment...</p>}
      <CommentForm postID={postData.id} />
    </div>
  )
}

export default Post