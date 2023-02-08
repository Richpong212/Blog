import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../redux/blogSlice";

const store = configureStore({
    reducer: {
        blog: blogSlice,

    },
});

export default store;