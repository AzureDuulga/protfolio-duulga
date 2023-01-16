import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import style from "./style.module.scss";

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
            <Nav.Link className={style.Logo} href="#Hero">
              Hero
            </Nav.Link>
            <Nav.Link className={style.Logo} href="#About">
              About
            </Nav.Link>
            <Nav.Link className={style.Logo} href="#Skills">
              Skills
            </Nav.Link>
            <Nav.Link className={style.Logo} href="#Education">
              Education
            </Nav.Link>
            <Nav.Link className={style.Logo} href="#Contact">
              Contact
            </Nav.Link>
            <Nav.Link className={style.Logo} href="#Project">
              Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
