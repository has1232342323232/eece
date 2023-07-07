import React from 'react'; 
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='App'>
        <div className='m-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
        </div>
    </div>
    
  );
};

export default App;