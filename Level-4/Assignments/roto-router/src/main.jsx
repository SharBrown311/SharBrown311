import React from 'react'
import {action as destroyAction} from "./routes/destroy"
import { Route } from 'react-router-dom';
import Index from './routes';
import ErrorPage from './error-page';
import Root, {loader as rootLoader, action as rootAction} from './routes/root'
import EditContact, {action as editAction} from './routes/edit'
import Contact, {loader as contactLoader, 
action as contactAction} from './routes/contact'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
 createBrowserRouter, 
 RouterProvider 
} from 'react-router-dom'
import './index.css' 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router = {router} />
    </React.StrictMode>
  )

