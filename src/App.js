
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Home from './components/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Statistics from './components/Statistics/Statistics';
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
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home />
        },
        {
          path:'home',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/home/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element:<HomeDetails></HomeDetails>
        },
        {
          path:'statistics',
          element:<Statistics />
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
