import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId = action.payload;
      state.channelName = action.payload;
    },
  },
});

export const { setChannelId, logout } = appSlice.actions;

export const selectchannelId = (state) => state.app.channelId;
export const selectchannelName = (state) => state.app.channelName;

export default appSlice.reducer;
