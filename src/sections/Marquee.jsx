import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 30em) {
    width: 90vw;
    height: 50vh;
  }
`;

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 6rem;
    box-shadow: 1px 1px 1px #ffff;
  }

  @media (max-width: 90em) {
    font-size: ${(props) => props.theme.fontExtra};
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }

  @media (max-width: 30em) {
    font-size: 1.8em;
    span {
      padding: 1rem 3rem;
      margin: 3rem;
    }
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            data-scroll-target="#direction"
          >
            Fin del Mundo
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="5"
          data-scroll-target="#direction"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            Principio de Todo
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;
