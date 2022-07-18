import { createSlice } from "@reduxjs/toolkit";

const sliceName = "terminaciones";

const initialState = {
  isFetchingData: false,
  data: [],
  errorMsg: "",
};

const terminacionesSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    terminacionesRequestData(state, action) {},
    terminacionesIsFetching(state, action) {
      state.isFetchingData = action.payload;
    },
    terminacionesRequestError(state, action) {
      state.isFetchingData = false;
      state.errorMsg = action.payload;
    },
    terminacionesRequestDataSuccess(state, action) {
      state.isFetchingData = false;
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = terminacionesSlice;

export const {
  terminacionesRequestData,
  terminacionesIsFetching,
  terminacionesRequestError,
  terminacionesRequestDataSuccess,
} = actions;

export default reducer;
