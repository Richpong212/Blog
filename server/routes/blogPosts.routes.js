import express from 'express';
import { 
  getAllBlogPosts,
  addBlogPost,
  getSingleBlogPost,
  updateSingleBlogPost,
  deleteSingleBlogPost,
  likeBlogPost
} from '../controllers/blogPost.controller.js';

const router = express.Router();

// get all blog posts
router.get('/', getAllBlogPosts);

// add a blog post
router.post('/', addBlogPost);

// get a single blog post
router.get('/:id', getSingleBlogPost);

// update a single blog post
router.patch('/:id', updateSingleBlogPost);

// delete a single blog post
router.delete('/:id', deleteSingleBlogPost);

// like a blog post
router.patch('/:id/likeBlogPost', likeBlogPost);



export default router;