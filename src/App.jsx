import logo from './logo.svg';
import './App.css';
import Navpar from './commponet/Navpar/Navpar';
import Home from './commponet/Home/Home';
import About from './commponet/About/About';
import Portofolo from './commponet/Portofolo/Portofolo';
import Contact from './commponet/Contact/Contact';
import Footer from './commponet/Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './commponet/Layout/Layout';

const myRouter= createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/portfolio',element:<Portofolo/>},
    {path:'/contact',element:<Contact/>}
  ]}
])






function App() {
  return (
    <>

      <RouterProvider router={myRouter}/>

     



    </>
  );
}

export default App;

