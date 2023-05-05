import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allowLikes: false,
  allowDislikes: false,
  allowRemove: false,
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
    },

    toggleAllowRemove: (state) => {
      state.allowRemove = !state.allowRemove;
    },
  }

});

export const { toggleAllowLikes, toggleAllowDislikes, toggleAllowRemove } = settingsSlice.actions;
export default settingsSlice.reducer;