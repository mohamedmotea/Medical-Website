


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Booking from './Components/Booking/Booking';
import Faq from './Components/Faq/Faq';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';


function App() {

  const router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {  index:true,element:<Home/>},
    {path:"/contact",element:<Contact/>},
    {path:"/about",element:<About/>},
    {path:"/ourteam",element:<Team/>},
    {path:"/services",element:<Services/>},
    {path:"/blog",element:<Blog/>},
    {path:"/booking",element:<Booking/>},
    {path:"/faq",element:<Faq/>},
    {path:"/Login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/pagenotfound",element:<Notfound/>},
    {path:"*",element:<Notfound/>},
    

    
    ]}
  ])

  return (
    <>
<HelmetProvider>

<RouterProvider router={router}/>
</HelmetProvider>

    </>
  )
}

export default App
