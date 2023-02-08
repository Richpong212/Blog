import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
      type: String,
    },
    description: String,
    tags: [String],
    fileUpload: String,
    upvote: {
      type: Number,
      default: 0,
    },
    creator: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  
  const BlogPost = mongoose.model("BlogArticle", blogSchema);
  
  export default BlogPost;