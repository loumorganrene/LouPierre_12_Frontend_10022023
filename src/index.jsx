import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import Error from "../src/components/Error";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user/12" />,
    errorElement: <Error />,
  },
  {
    path: "user/:userId",
    element: <App />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
