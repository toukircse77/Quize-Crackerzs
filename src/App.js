
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Route from './LayOut/Route';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorMessage></ErrorMessage>,
      element:<Route></Route>,
      children:[
        {
          path:'/',
          element:<Home />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
