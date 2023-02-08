import {createSlice,} from '@reduxjs/toolkit';

const initialState = {
    blogs: [],
    isFetching: false,
    error: false,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        // Get Blogs
        getBlogsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getBlogsSuccess: (state,action) => {
            state.isFetching = false;
            state.blogs = action.payload;
        },
        getBlogsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

         // Get Blogs
         deleteBlogsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteBlogsSuccess: (state,action) => {
            state.isFetching = false;
            state.blogs.splice(
                state.blogs.findIndex((blog) => blog._id === action.payload), 1
            );
        },
        deleteBlogsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
});

export const {
     getBlogsStart, 
     getBlogsSuccess, 
     getBlogsFailure,
     deleteBlogsStart,
     deleteBlogsSuccess,
     deleteBlogsFailure,
    } = blogSlice.actions;

export default blogSlice.reducer;