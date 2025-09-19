import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ToDoListContextProvider } from './context/ToDoListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoListContextProvider>
      <App />
    </ToDoListContextProvider>
  </React.StrictMode>
);

reportWebVitals();
