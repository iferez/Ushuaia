import React, { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 30em) {
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin-top: 1rem;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 2rem;
  }
`;

const Article = styled.article`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 30em) {
    display: block;
  }
`;

const Card = styled.div`
  width: 30vw;
  height: 25vh;
  font-size: ${(props) => props.theme.fontxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-align: center;
  color: #ffff;
  border: 2px solid #ffffff20;
  margin: 2rem;
  z-index: 4;
  padding: 2rem;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #ffff;
    color: ${(props) => props.theme.body};
    transition: 0.5s ease;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 100%;
    height: auto;
    margin: 2rem 0;
    padding: 1rem;

    &:first-child {
      margin-top: 4rem;
    }
  }
`;

const Photo = () => {
  const ref = useRef(null);

  return (
    <Section ref={ref} id="shop">
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="vertical"
      >
        Tierra con historia
      </Title>
      <Article>
        <Card
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
        >
          Parque Nacional <br /> Tierra del Fuego
        </Card>
        <Card
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
        >
          Ciurcuito <br /> de los Valles
        </Card>
      </Article>
      <Article>
        <Card
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
        >
          Canal <br /> Beagle
        </Card>
        <Card
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
        >
          Espacio Pensar <br /> Malvinas
        </Card>
      </Article>
    </Section>
  );
};

export default Photo;
