import React from 'react';
import ReactDOM from 'react-dom/client';
import { browserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <browserRouter>
    <App />  
    </browserRouter> 
  </React.StrictMode>,
);
