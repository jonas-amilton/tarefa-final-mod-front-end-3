import React from "react";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./routes/Router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CssBaseline />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
