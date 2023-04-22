import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export interface Recado {
  id: string;
  description: string;
  detail: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  recados: Recado[];
}

const userAdapter = createEntityAdapter<User>({
  selectId: (user) => user.email,
});

export const {
  selectAll: buscarTodosUsuarios,
  selectById: buscarUsuarioPorEmail,
} = userAdapter.getSelectors((state: RootState) => state.users);

const userSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  reducers: {
    adicionar: userAdapter.addOne,
    atualizar: userAdapter.updateOne,
  },
});

export const { adicionar, atualizar } = userSlice.actions;

export default userSlice.reducer;
