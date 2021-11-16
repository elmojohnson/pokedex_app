import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="danger" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand
            className="fw-bold ms-auto me-auto"
            href="/"
            onClick={() => localStorage.removeItem("last_url")}
          >
            Pokedex
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
