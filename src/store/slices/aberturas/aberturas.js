import { createSlice } from "@reduxjs/toolkit";

const sliceName = "aberturas";

const initialState = {
  isFetchingData: false,
  data: [],
  errorMsg: "",
};

const aberturasSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    aberturasRequestData(state, action) {},
    aberturasIsFetching(state, action) {
      state.isFetchingData = action.payload;
    },
    aberturasRequestError(state, action) {
      state.isFetchingData = false;
      state.errorMsg = action.payload;
    },
    aberturasRequestDataSuccess(state, action) {
      state.isFetchingData = false;
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = aberturasSlice;

export const {
  aberturasRequestData,
  aberturasIsFetching,
  aberturasRequestError,
  aberturasRequestDataSuccess,
} = actions;

export default reducer;
