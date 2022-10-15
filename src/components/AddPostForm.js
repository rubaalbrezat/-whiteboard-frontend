import axios from 'axios';
import React, { useContext, useState } from 'react';
import { RefreshContext } from '../contexs/RefreshProvider';
import cookies from 'react-cookies';
import { actions } from '../reducers/actionTypes';
function AddPostForm() {
	//const { refreshMain, setRefreshMain } = useContext(RefreshContext);
	const { dispatchRefresh } = useContext(RefreshContext);

	async function AddPost(e) {
		e.preventDefault();
		const url = `${process.env.REACT_APP_SERVER}/post`;
		const post = {
			title: e.target.title.value,
			content: e.target.content.value,
		};
		const token = cookies.load("token");
		const bearer = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}
		const axiosResponse = await axios.post(url, post, bearer);
		dispatchRefresh({ type: actions.SetRefreshMain })
		e.target.title.value = '';
		e.target.content.value = '';
	}






	return (
		<form className='addPostForm' onSubmit={AddPost}>
			<input type='text' placeholder='Title' name='title' id='ttt' required></input>
			<br></br>
			<input type='text' placeholder='Content' name='content' id='tttC' required></input>
			<br></br>
			<input type='submit' value='Post' id='tttS'></input>
		</form>
	)
}

export default AddPostForm