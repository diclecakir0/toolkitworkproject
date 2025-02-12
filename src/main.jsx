import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
