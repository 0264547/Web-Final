import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/">
            <img src="/images/logo.jpg" alt="CalmCompass" className="navbar-brand-image"/> CalmCompass
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/assesment">Self-Assesment</Nav.Link>
            <Nav.Link href="/advice">Professional Advice</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/signUp">Sign-Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;