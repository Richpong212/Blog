import BlogPost from '../models/blogs.model.js';
import mongoose from 'mongoose';

// get all blog posts
export const getAllBlogPosts = async (req, res) => {
    try {
        const blogPost = await BlogPost.find({});
        res.status(200).json(blogPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

// add a blog post
export const addBlogPost = async(req, res) => {
     try {
            const blogPost = req.body;
            const newBlogPost = new BlogPost(blogPost);
            await newBlogPost.save();
            res.status(201).json(newBlogPost);
        
     } catch (error) {
         res.status(404).json({ message: error.message })
     }
}

// get a single blog post
export const getSingleBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const blogPost = await BlogPost.findById(id);
        res.status(200).json(blogPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// update a single blog post
export const updateSingleBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, creator, fileUpload, tags } = req.body;

        // if the blog post doesn't exist
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog post with id: ${id}`);

        // update the blog post
        const updatedBlogPost = { 
            title, 
            description, 
            creator, 
            fileUpload, 
            tags, 
            _id: id 
          };

       await BlogPost.findByIdAndUpdate(id, updatedBlogPost, { new: true })

         res.status(201).json(updatedBlogPost);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// delete a single blog post
export const deleteSingleBlogPost = async (req, res) => {
    try {
        const { id } = req.params;

        // if the blog post doesn't exist
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog post with id: ${id}`);

        await BlogPost.findByIdAndRemove(id);

        res.status(201).json({ message: 'Blog post deleted successfully' });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// like a blog post
export const likeBlogPost = async (req, res) => {
    try {
        const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await BlogPost.findById(id);

  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { upvote: post.upvote + 1 },
    { new: true }
  );

    res.status(201).json(updatedBlogPost);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}