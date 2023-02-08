import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cors from 'cors';
import morgan from 'morgan';
import blogPost from './routes/blogPosts.routes.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use('/api/blogs',blogPost)

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
   await connectDB()
});
