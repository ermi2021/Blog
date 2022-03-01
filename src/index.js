import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App/App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPost from "./component/NewPost/NewPost";
import PostDetails from "./component/PostDetails/PostDetails";
import Footer from "./component/Footer/Footer";
import Paper from '@mui/material/Paper';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="add" element={<NewPost />} />
          <Route path="/post" element={<PostDetails />} />
        </Routes>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Footer/>
        </Paper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
