import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(myReducer, composeWithDevTools(middlewares));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
