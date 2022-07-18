import { createSlice } from "@reduxjs/toolkit";

const sliceName = "equipamiento";

const initialState = {
  isFetchingData: false,
  data: [],
  errorMsg: "",
};

const equipamientoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    equipamientoRequestData(state, action) {},
    equipamientoIsFetching(state, action) {
      state.isFetchingData = action.payload;
    },
    equipamientoRequestError(state, action) {
      state.isFetchingData = false;
      state.errorMsg = action.payload;
    },
    equipamientoRequestDataSuccess(state, action) {
      state.isFetchingData = false;
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = equipamientoSlice;

export const {
  equipamientoRequestData,
  equipamientoIsFetching,
  equipamientoRequestError,
  equipamientoRequestDataSuccess,
} = actions;

export default reducer;
