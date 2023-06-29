import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Academics from './pages/academics';
import Activities from './pages/activities';
import CollegeLife from './pages/collegelife';
import Resources from './pages/resources';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'academics',
        element: <Academics />,
    },
    {
        path: 'activities',
        element: <Activities />,
    },
    {
        path: 'collegelife',
        element: <CollegeLife />,
    },
    {
        path: 'resources',
        element: <Resources />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
