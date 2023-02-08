import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/blogs/';

export const fetchAllBlogs = () => axios.get(apiUrl);