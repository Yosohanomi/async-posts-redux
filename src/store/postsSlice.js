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

            })
            builder.addCase(fetchPosts.fulfilled, (state) => {

            })
            builder.addCase(fetchPosts.rejected, (state) => {

            })
        }
    }
)