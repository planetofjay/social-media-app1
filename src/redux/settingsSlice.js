import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({

  name: 'settings',
  initialState: {
    allowLikes: true,
    allowDislikes: true
  },
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