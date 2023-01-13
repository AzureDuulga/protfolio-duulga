import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="Hero" className={Styles.Container}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0000",
            },
            links: {
              color: "#0000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Container id={Styles.container}>
        <Row>
          <Col>
            <h1>
              Hi There,
              <br />
              I'm Duulga Enkhtur
            </h1>
            <h3>
              i Am Into
              <Typewriter
                words={[" Web Development", " FrontEnd", " BackEnd"]}
                loop={false}
              />
            </h3>
            <Button
              className="d-block rounded-pill my-3 px-3 shadow-sm"
              variant="light"
            >
              About Me <ArrowDownCircleFill />
            </Button>

            <SocialIcon
              className={Styles.SocialIcon}
              network="linkedin"
              bgColor="#000000"
              fgcolor=""
            />
            <SocialIcon
              className={Styles.SocialIcon}
              network="twitter"
              bgColor="#000000"
              fgcolor=""
            />
            <SocialIcon
              className={Styles.SocialIcon}
              network="twitter"
              bgColor="#000000"
              fgcolor=""
            />
            <SocialIcon
              className={Styles.SocialIcon}
              network="telegram"
              bgColor="#000000"
              fgcolor=""
            />
            <SocialIcon
              className={Styles.SocialIcon}
              network="instagram"
              bgColor="#000000"
              fgcolor=""
            />
          </Col>
          <Col xs={5}>
            <img
              className={Styles.imgContainer}
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              alt="Hero.Portrait"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
