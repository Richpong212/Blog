import { deleteBlogsFailure, deleteBlogsStart, deleteBlogsSuccess, getBlogsFailure, getBlogsStart, getBlogsSuccess } from "./blogSlice";
import axios from 'axios';


const baseUrl = 'http://localhost:3001/api/blogs/';

const publicFetch = axios.create({
    baseURL: baseUrl,
});

// Get Blogs
export const getBlogs = async (dispatch) => {
    dispatch(getBlogsStart());
    try {
        const res = await publicFetch.get();
        dispatch(getBlogsSuccess(res.data));
    } catch (error) {
        dispatch(getBlogsFailure());
    }
};

// Delete Blogs
export const deleteBlogs = async (dispatch, id) => {
    dispatch(deleteBlogsStart());
    try {
        await publicFetch.delete(`/${id}`);
        dispatch(deleteBlogsSuccess(id));
    } catch (error) {
        dispatch(deleteBlogsFailure());
    }
}