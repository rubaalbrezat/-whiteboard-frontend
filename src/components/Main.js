import React, { useContext, useEffect, useState } from 'react';
import AuthProvider, { AuthContext } from '../contexs/AuthProvider';
import { Navigate } from 'react-router-dom';
import AddPostForm from './AddPostForm';
import axios from 'axios';
import cookies from 'react-cookies';
import Post from './Post';
import '../App.css';
import { themeContext } from '../contexs/ThemeProvider';
import { RefreshContext } from '../contexs/RefreshProvider';
import { actions } from '../reducers/actionTypes';
function Main() {


	const { state, dispatch, canDo } = useContext(AuthContext);
	const { stateRefresh } = useContext(RefreshContext);
	const { mode, setMode } = useContext(themeContext);

	const [posts, setPosts] = useState([]);



	useEffect(() => {
		const token = cookies.load("token");
		console.log(canDo("update"))

		setMode(cookies.load("mode"))
		if (token) {
			dispatch({ type: actions.Login_Success })
			const bearer = {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			}
			const url = `${process.env.REACT_APP_SERVER}/post`;
			axios.get(url, bearer)
				.then(resolve => {
					const posts = resolve.data;
					setPosts(posts);
				})
				.catch(reject => {
					console.log(reject);
				})
		}

	}, [stateRefresh.refreshMain])


	return (
		<>
			{(state.isLogged) ?
				<div>
					<section>
						<AddPostForm />
					</section>
					<section >
						{posts.map((post, index) => <Post postData={post} key={index} />)}
					</section>
				</div>
				: <Navigate to='/login' />}
		</>
	)
}

export default Main