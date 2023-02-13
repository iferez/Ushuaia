import React, { useRef } from "react";
import styled from "styled-components";

import a1 from "../assets/Images/a1.jpg";
import a2 from "../assets/Images/a2.jpg";
import a3 from "../assets/Images/a3.jpg";
import a4 from "../assets/Images/a4.jpg";
import a5 from "../assets/Images/a5.jpg";
import a6 from "../assets/Images/apinguino.png";
import a7 from "../assets/Images/a7.jpg";

const Section = styled.section`
  min-height: 200vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
    min-height: 100vh;
  }

`;

const Center = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  

  img {
    width: 50%;
    height: auto;
    -webkit-box-shadow: 0px 6px 28px -4px rgba(71, 71, 71, 0.7);
    -moz-box-shadow: 0px 6px 28px -4px rgba(71, 71, 71, 0.7);
    box-shadow: 0px 6px 28px -4px rgba(71, 71, 71, 0.7);
  }

  .big-img-1 {
    width: 60%;
    position: absolute;
    left: 0;
    top: 10%;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    left: 60%;
    top: 15%;
  }

  .small-img-2 {
    width: 50%;
    position: absolute;
    left: 60%;
    top: 35%;
  }

  .small-img-3 {
    width: 40%;
    position: absolute;
    left: 70%;
    top: 59%;
  }

  .small-img-4 {
    width: 50%;
    position: absolute;
    left: 70%;
    bottom: 1%;
  }

  .small-img-5 {
    width: 40%;
    position: absolute;
    left: 5%;
    bottom: 5%;
  }

  .small-img-6 {
    width: 25%;
    position: absolute;
    left: 45%;
    bottom: 15%;
    z-index: 15;
  }

  @media (max-width: 30em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }

    .small-img-1 {
      width: 60%;
      position: absolute;
      left: 40%;
      top: 15%;
    }
  
    .small-img-2 {
      width: 50%;
      position: absolute;
      left: 60%;
      top: 35%;
    }
  
    .small-img-3 {
      width: 60%;
      position: absolute;
      left: 50%;
      top: 59%;
    }
  
    .small-img-4 {
      width: 50%;
      position: absolute;
      left: 70%;
      bottom: 1%;
    }
  
    .small-img-5 {
      width: 50%;
      position: absolute;
      left: 0%;
      bottom: 5%;
    }
  
    .small-img-6 {
      width: 40%;
      position: absolute;
      left: 30%;
      bottom: 15%;
      z-index: 15;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: #fff;

  position: absolute;
  top: 1rem;

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
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 2rem;
  }

`;

const About = () => {
  const ref = useRef(null);

  return (
    <Section ref={ref} id="shop">
      <Title
        data-scroll
        data-scroll-speed="-4"
        data-scroll-direction="horizontal"
      >
        Tierra con historia
      </Title>
      <Center>
        <img
          className="big-img-1"
          src={a7}
          alt=""
          data-scroll
          data-scroll-speed="3"
        />

        <img
          className="small-img-1"
          src={a1}
          alt=""
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        />

        <img
          className="small-img-2"
          src={a4}
          alt=""
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        />

        <img
          className="small-img-3"
          src={a2}
          alt=""
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="horizontal"
        />

        <img
          className="small-img-6"
          src={a6}
          alt=""
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="vertical"
        />

        <img
          className="small-img-4"
          src={a3}
          alt=""
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        />

        <img
          className="small-img-5"
          src={a5}
          alt=""
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        />
      </Center>
    </Section>
  );
};

export default About;
