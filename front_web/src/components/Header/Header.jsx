import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MyNavbar from './MyNavbar';

const Header = () => {

      return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container>
            <MyNavbar />
          </Container>
        </Navbar>
      );
    }
    
    export default Header;