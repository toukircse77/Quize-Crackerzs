
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Home from './components/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
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
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Statistics />
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'topics',
          element:<Topic></Topic>
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
