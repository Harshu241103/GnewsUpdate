import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation(); // tells React to re-render when URL changes
  const path = location.pathname; // example: "/gujarati/sports"

  const isEnglish = path.startsWith('/english');
  const isHindi = path.startsWith('/hindi');
  const isGujarati = path.startsWith('/gujarati');

  // ---------- ENGLISH NAVBAR ----------
  if (isEnglish) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/english/general">GNews App</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/english/general">General</Nav.Link>
              <Nav.Link as={Link} to="/english/world">World</Nav.Link>
              <Nav.Link as={Link} to="/english/nation">Nation</Nav.Link>
              <Nav.Link as={Link} to="/english/business">Business</Nav.Link>
              <Nav.Link as={Link} to="/english/technology">Technology</Nav.Link>
              <Nav.Link as={Link} to="/english/entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/english/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/english/science">Science</Nav.Link>
              <Nav.Link as={Link} to="/english/health">Health</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="English" id="nav-dropdown-language">
                <NavDropdown.Item as={Link} to="/english/general">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hindi/general">Hindi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gujarati/general">Gujarati</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // ---------- HINDI NAVBAR ----------
  if (isHindi) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/hindi/general">GNews App</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/hindi/general">General</Nav.Link>
              <Nav.Link as={Link} to="/hindi/world">World</Nav.Link>
              <Nav.Link as={Link} to="/hindi/nation">Nation</Nav.Link>
              <Nav.Link as={Link} to="/hindi/business">Business</Nav.Link>
              <Nav.Link as={Link} to="/hindi/technology">Technology</Nav.Link>
              <Nav.Link as={Link} to="/hindi/entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/hindi/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/hindi/science">Science</Nav.Link>
              <Nav.Link as={Link} to="/hindi/health">Health</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Hindi" id="nav-dropdown-language">
                <NavDropdown.Item as={Link} to="/english/general">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hindi/general">Hindi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gujarati/general">Gujarati</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // ---------- GUJARATI NAVBAR ----------
  if (isGujarati) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/gujarati/general">GNews App</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/gujarati/general">General</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/world">World</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/nation">Nation</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/business">Business</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/technology">Technology</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/science">Science</Nav.Link>
              <Nav.Link as={Link} to="/gujarati/health">Health</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Gujarati" id="nav-dropdown-language">
                <NavDropdown.Item as={Link} to="/english/general">English</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hindi/general">Hindi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gujarati/general">Gujarati</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // ---------- DEFAULT (fallback to English) ----------
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/english/general">GNews App</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/english/general">General</Nav.Link>
            <Nav.Link as={Link} to="/english/world">World</Nav.Link>
            <Nav.Link as={Link} to="/english/nation">Nation</Nav.Link>
            <Nav.Link as={Link} to="/english/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/english/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/english/entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/english/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/english/science">Science</Nav.Link>
            <Nav.Link as={Link} to="/english/health">Health</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="English" id="nav-dropdown-language">
              <NavDropdown.Item as={Link} to="/english/general">English</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hindi/general">Hindi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gujarati/general">Gujarati</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;