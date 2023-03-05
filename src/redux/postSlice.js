import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({

  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    likePost: () => {
      console.log('Like');
    },

    dislikePost: () => {
      console.log('Dislike');
    },

    addPost: () => {
      console.log('Add');
    }
  }

});

export const { likePost, dislikePost, addPost } = postSlice.actions;
export default postSlice.reducer;