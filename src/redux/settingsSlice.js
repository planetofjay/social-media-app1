import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allowLikes: true,
  allowDislikes: true
};

export const settingsSlice = createSlice({

  name: 'settings',
  initialState,
  reducers: {
    toggleAllowLikes: (state) => {
      state.allowLikes = !state.allowLikes;
    },

    toggleAllowDislikes: (state) => {
      state.allowDislikes = !state.allowDislikes;
    }
  }

});

export const { toggleAllowLikes, toggleAllowDislikes } = settingsSlice.actions;
export default settingsSlice.reducer;