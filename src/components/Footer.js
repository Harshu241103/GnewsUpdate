import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-4">
      <Container>
        <p className="mb-0">© {new Date().getFullYear()} GNews App. News powered by GNews API.</p>
      </Container>
    </footer>
  );
}

export default Footer;
