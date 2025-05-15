// src/router/router.tsx
//External libraries
import { createBrowserRouter } from 'react-router-dom';
//React components
import AppLayout from '../AppLayout';
import AboutPage from '../pages/AboutPage.tsx';
import ProductsPage from '../pages/ProductPage.tsx';
import ContactsPage from '../pages/ContactsPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: < AboutPage/>,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
]);
