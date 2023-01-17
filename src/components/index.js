import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      id={style.shadow}
    >
      <Container>
        <Navbar.Brand href="#home">
          <SocialIcon network="youtube" />
        </Navbar.Brand>
        <h3>Duulga</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link className={style.Logo} to="/Hero">
                Hero
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/About">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/Skills">
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/Education">
                Education
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/Experience">
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/Contact">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.Logo} to="/Project">
                Project
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
