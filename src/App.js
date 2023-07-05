import React from 'react'; 
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Route';

const App = () => {
  return (
    <div className='App'>
        <div className='m-auto'>
        <RouterProvider router={router}></RouterProvider>
        </div>
    </div>
    
  );
};

export default App;