
import Navbars from '../Navbar/Navbars';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


export default function Layout() {

  return <>


    <Navbars/>
    <Container>
      <Outlet/>
    </Container>
    <Footer/>
  
  
  
  </>
  
}
