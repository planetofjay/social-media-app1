import { createSlice } from "@reduxjs/toolkit";

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
      console.log('Action:', action);
      state.posts.push(action.payload);
    },

    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  }

});

export const { likePost, dislikePost, addPost, setPosts } = postSlice.actions;
export default postSlice.reducer;