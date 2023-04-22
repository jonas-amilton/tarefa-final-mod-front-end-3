import { createSlice } from "@reduxjs/toolkit";

interface UserLoggedState {
  id: string;
  email: string;
  password: string;
}

const initialState: UserLoggedState = {
  id: "",
  email: "",
  password: "",
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    createUserLogged: (state, action) => action.payload,
    clearUserLogged: () => initialState,
  },
});

export const { createUserLogged, clearUserLogged } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
