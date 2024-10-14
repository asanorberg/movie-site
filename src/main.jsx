import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store/store.js";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        {" "}
        {/* Wrap App with Provider and pass in the store */}
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
