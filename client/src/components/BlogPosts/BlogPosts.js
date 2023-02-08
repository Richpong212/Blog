import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlogs, getBlogs } from '../../redux/apiCalls';


const BlogPosts = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blog.blogs);


  // Delete Blog
  const handleDelete = (id) => {
    deleteBlogs(dispatch, id);
  };
  

  useEffect(() => {
     getBlogs(dispatch)
  }, [dispatch,]);

  return (
    
    <Box>
      {blogs.map((blog) => (
      <Box
        marginBottom={'10px'}
        backgroundColor={'white'}
        borderRadius={'10px'}
        height='100%'
        key={blog._id}
      >
        <Box
          w={'100%'}
          height={'100%'}
        >
          <Image 
            src={blog.fileUpload} alt={'image'} 
            height={'250px'}
            width={'100%'}
            objectFit={'cover'}
            borderRadius={'10px'}
          />
        </Box>
        <Box
            position={'absolute'}
            top={'10rem'}
            color={'white'}
            w={'100%'}
            padding={'10px'}
            cursor={'pointer'}
          >
            <Text>Pragma</Text>
            <span>8 hours ago</span>
          </Box>
          <Box
            position={'absolute'}
            top={'10rem'}
            left={'78rem'}
            color={'red'}
            w={'100%'}
            padding={'10px'}
            cursor={'pointer'}
          >
            <CreateIcon />
          </Box>
        <Box
          padding={'10px'}
        >
          <Text
          >
              {blog.description}
          </Text>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              pt={'10px'}
            >
            <Box
                display={'flex'}
                cursor={'pointer'}
                gap={'10px'}
            >
              <ArrowUpwardIcon />
              <Text>Upvote</Text>
              <Text>10</Text>
            </Box>
            <Box onClick={
              () => handleDelete(blog._id)
            } cursor={'pointer'}>
                <DeleteIcon />
            </Box>
            </Box>
        </Box>
      </Box>
      ))}
    </Box>
  )
}

export default BlogPosts