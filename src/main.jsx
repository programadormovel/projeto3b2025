import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import AppRoutes from './components/AppRoutes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes /> {/* <-- alteração aqui de <App />  para <AppRoutes /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
