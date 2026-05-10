import {createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice(
    {
        name: "posts",
        initialState: {
            posts: [],
            isLoading:false,
            isError:false
        },
        extraReducers: (builder) => {
            builder.addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts = action.payload;
            })
            builder.addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload;
            })
        }
    }
)

export default postsSlice.reducer