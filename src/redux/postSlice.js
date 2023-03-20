import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const postSlice = createSlice({

  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    likePost: (state, action) => {
      const id = action.payload;
      state.posts.forEach((post) => {
        if(post.id === id) {
          post.likes++;
        }
      });
    },

    dislikePost: (state, action) => {
      const id = action.payload;
      state.posts.forEach((post) => {
        if(post.id === id) {
          post.dislikes++;
        }
      });
    },

    addPost: (state, action) => {
      const newPost = {
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        promote: action.payload.promote,
        status: action.payload.status,
        picture: action.payload.picture,
        likes: 0,
        dislikes: 0
      };
      state.posts.push(newPost);
    },

    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  }

});

export const { likePost, dislikePost, addPost, setPosts } = postSlice.actions;
export default postSlice.reducer;