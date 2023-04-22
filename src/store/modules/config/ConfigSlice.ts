import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../RootState";

export type Config = {
  showModal: {
    open: boolean;
    type: "Editar" | "Apagar" | null;
    id?: string | null;
  };
  loading: boolean;
};

const initialState: Config = {
  showModal: {
    open: false,
    type: null,
  },
  loading: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<Config["showModal"]>) => {
      state.showModal = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const configSliceSelectAll = (state: RootState) => state.config;

export const { setShowModal, setLoading } = configSlice.actions;

export default configSlice.reducer;
