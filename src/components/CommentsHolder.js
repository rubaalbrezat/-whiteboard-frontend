import React from 'react'
import {Text,Heading,HStack,Stack} from '@chakra-ui/react';

function CommentsHolder({ comments }) { 
  return (
    <Stack>
      {comments.map((comment, index) => (         
        <HStack key={index}>
          <Text> By User: {comment.userId}</Text>
          <Heading>{comment.content}</Heading>
          <hr></hr>
        </HStack>
      ))}
    </Stack>
  )
}

export default CommentsHolder