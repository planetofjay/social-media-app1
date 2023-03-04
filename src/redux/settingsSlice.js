import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allowLikes: true,
  allowDislikes: true
};

export const settingsSlice = createSlice({

  name: 'settings',
  initialState,
  reducers: {
    toggleAllowLikes: () => {
      console.log('Redux: Allow likes');
    },

    toggleAllowDislikes: () => {
      console.log('Redux: Allow dislikes');
    }
  }

});

export const { toggleAllowLikes, toggleAllowDislikes } = settingsSlice.actions;
export default settingsSlice.reducer;