import React from "react";
import styled from "styled-components";

import faro from "../assets/Images/faro.jpg";
import ciudad from "../assets/Images/ciudad.jpg";
import tren from "../assets/Images/tren.jpg";


const Section = styled.section`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
height: 80%;
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  color: #030303;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(1px);
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    background-color: #ffffff90;
    color: #030303;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    height: auto;
    padding: 2rem;
    width: 90%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 80%;
    position: absolute;
    right: 92%;
    bottom: 5%;
  }
  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 70%;
    top: 30%;
  }


  @media (max-width: 30em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      display:none;
    }
    .small-img-2 {
      display:none;
  }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    margin-top: 2rem;
    color: #fff;
    left: 10%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Ciudad
      </Title>
      <Left data-scroll data-scroll-speed="2">
        Ushuaia se encuentra al final de la Patagonia austral, es el extremo sur
        de la Argentina, el fin del mundo o como la llaman algunos:
        <strong> el principio de todo</strong>. Está rodeada por el mar y por la
        cordillera; desde donde te pares podés llegar a ver alguno de los dos y
        sorprenderte con los colores y la inmensidad de la naturaleza presente
        en la ciudad.
      </Left>

      <Right>
        <img width="400" height="600" src={faro} alt="Faro del fin del mundo" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={ciudad}
          alt="Ciudad de Ushuaia"
          data-scroll
          data-scroll-speed="3"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={tren}
          alt="Tren del fin del mundo"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;
