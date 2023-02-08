import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const BlogPostsForm = () => {
  return (
    <Box
        display={'flex'}
        flexDirection={'column'}
        gap={4}
        p={4}
    >
       <Text pl={4} ><strong>Create a Blog</strong></Text> 
       <Box
        display={'flex'}
        alignItems={'center'}
        gap={2}
        pl={4}
       >
        <AddPhotoAlternateIcon />
        <Text> Upload Blog Image</Text> 
       </Box>
       <Input 
         type={'file'}
         placeholder={'choose file'}
         border= 'none'
       />
       <Input
          type={'text'}
          placeholder={'Blog Title'}
          border= '1px solid gray'
       />
       <Textarea 
          placeholder={'Blog Content'}
       />
       <Input
          type={'text'}
          placeholder={'Author Name'}
          border= '1px solid gray'
       />
       <Text pl={4} color='gray.500' ><strong>Tags (5 max separated by comma)</strong></Text>
       <Input 
         type={'text'}
         placeholder={'Tags'}
       />
       <Button>Publish</Button>
    </Box>
  )
}

export default BlogPostsForm