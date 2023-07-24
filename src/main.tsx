import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
// importing components
import ErrorPage from './pages/error';
import Requirements from './pages/academics/Requirements';
import CreditAnalyzer from './pages/academics/CreditAnalyzer';
import Organizations from './pages/activities/Organizations';
import Events from './pages/activities/Events';
import Opportunities from './pages/activities/Opportunities';
import PlacesToVisit from './pages/collegelife/PlacesToVisit';
import StudentExperiences from './pages/collegelife/StudentExperiences';
import FAQPage from './pages/resources/FAQPage';
import OtherResources from './pages/resources/OtherResources';
import ContactUs from './pages/contactus/ContactUs';

const router = createBrowserRouter([
    // Home page
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },

    // Academics pages
    {
        path: 'academics/requirements',
        element: <Requirements />,
    },
    {
        path: 'academics/credit-analyzer',
        element: <CreditAnalyzer />,
    },

    // Activities pages
    {
        path: 'activities/organizations',
        element: <Organizations />,
    },
    {
        path: 'activities/events',
        element: <Events />,
    },
    {
        path: 'activities/opportunities',
        element: <Opportunities />,
    },

    // College Life pages
    {
        path: 'college-life/places-to-visit',
        element: <PlacesToVisit />,
    },
    {
        path: 'college-life/student-experiences',
        element: <StudentExperiences />,
    },

    // Resources pages
    {
        path: 'resources/faq',
        element: <FAQPage />,
    },
    {
        path: 'resources/other-resources',
        element: <OtherResources />,
    },
    // Contact Us Page
    {
        path: 'contact-us',
        element: <ContactUs />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
