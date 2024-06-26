import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './pages/List';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Preview from './pages/Preview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/preview/:type/:id",
    element: <Preview />
  }
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
