import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
