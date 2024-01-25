import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="mb-5 nav"
        >
            <Container className="d-flex justify-content-between">
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src="../public/images/Dalle1.png"
                        className="img-fluid rounded-pill"
                        alt="logo-image"
                        style={{ width: "5%", height: "5%" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto large">
                        <Nav.Link as={NavLink} to="/" end className="nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/map-page"
                            end
                            className="nav-link"
                        >
                            Map
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/cv-page"
                            end
                            className="nav-link"
                        >
                            CV
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/projects-page"
                            end
                            className="nav-link"
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/sports-page"
                            end
                            className="nav-link"
                        >
                            Sports
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavigation;
