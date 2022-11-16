import axios from 'axios';
import React, { useContext, useState } from 'react';
import CommentForm from './CommentForm';
import CommentsHolder from './CommentsHolder';
import { RefreshContext } from '../contexs/RefreshProvider';
import Modal from '../components/Modal'
import cookies from 'react-cookies';
import { Button, HStack, useColorMode, Text, Heading, Stack } from '@chakra-ui/react';
import { actions } from '../reducers/actionTypes';


function Post({ postData }) {

	// const { refreshMain, setRefreshMain } = useContext(RefreshContext);
	const { dispatchRefresh } = useContext(RefreshContext);

	const { colorMode } = useColorMode();

	const role = cookies.load("role");

	const [showModal, setShowModal] = useState(false)

	function deletePost() {

		var flage = window.confirm("are you sure delte the post ?");

		if (!flage)
			return;
		const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
		const token = cookies.load("token");
		const bearer = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}
		axios.delete(url, bearer)
			.then(resolved => dispatchRefresh({ type: actions.SetRefreshMain }))
			.catch(reject => alert(reject.response.data));


	}

	function updatePost(title, content) {

		console.log(title, content)


		const token = cookies.load("token");
		const bearer = {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}
		const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
		const body = {
			title, content
		};
		axios.put(url, body, bearer).then(result => {
			console.log(result.data)
			setShowModal(false)
			window.location.reload();
		}).catch(console.log)

	}




	return (
		<Stack className='pos'>
			{showModal &&
				<Modal updatePost={updatePost} setShowModal={setShowModal} showModal={showModal} />

			}
			{(role === "admin" || postData?.userId == cookies.load("_id")) &&
				<>
					<HStack>
						<Button onClick={deletePost} bg={colorMode === "light" ? "blue.800" : "blue.200"}
							color={colorMode === "light" ? "green.200" : "green.800"}
							_hover={{ bg: colorMode === "light" ? "green.700" : "green.300" }}
							ml="1rem" >delete</Button>
						<Button onClick={() => setShowModal(true)} bg={colorMode === "light" ? "blue.800" : "blue.200"}
							color={colorMode === "light" ? "green.200" : "green.800"}
							_hover={{ bg: colorMode === "light" ? "green.700" : "green.300"  }}
							ml="1rem">Update</Button>
					</HStack>
				</>
			}
			<Heading as='h1' size='lg'>
				{postData.title}
			</Heading>
			<hr></hr>
			<Text>{postData.content}</Text>
			{postData.comments.length ? <CommentsHolder comments={postData.comments} /> : <Text >Add the first comment...</Text>}
			<CommentForm postID={postData.id} />
		</Stack >
	)
}

export default Post