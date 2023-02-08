import React from 'react'
import { Box,Text, Container, Heading } from '@chakra-ui/react'
import blogLogo from '.././Assets/blogLogo.gif'
import BlogPostsForm from '../components/BlogPostsForm/BlogPostsForm'
import BlogPosts from '../components/BlogPosts/BlogPosts'




const Home = () => {


  return (
    <Box
        backgroundColor='blueviolet;'
        color= 'white'
        p={4}
        pb='5rem'
    >
        <Container
            maxW="container.xl"
            centerContent
            p={4}
            height="100px"
            border='1px solid #fff'
        >
           
            <Heading>CodeGenitor Blog</Heading>
        </Container>
        <Box
            maxW="container.xl"
            display={'flex'}
            flexDirection={'row'}
            gap={4}
            pl='6rem'
            pt='2rem'
        >
            <Box
              backgroundColor={'#fff'}
              color={'black'}
              display={'flex'}
              flexDirection={'column'}
              flex = {1}
              borderRadius='10px'
              maxHeight={'500px'}
            >
                <BlogPostsForm />
            </Box>
            <Box
                color={'black'}
                display={'flex'}
                flexDirection={'column'}
                flex = {2}
                borderRadius='10px'
                height={'100%'}
            >
                <BlogPosts /> 
                <BlogPosts /> 
            </Box>
        </Box>
    </Box>
  )
}

export default Home