import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, {rejectWithValue}) => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(result);
            return result.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)