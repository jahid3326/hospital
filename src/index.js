import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/styles.css';
import './assets/css/style.scss';
import { RouterProvider } from "react-router-dom";
import Router from './components/router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Router} />);