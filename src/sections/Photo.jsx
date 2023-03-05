import React, { useRef } from "react";
import styled from "styled-components";
import u3 from "../assets/Images/u3.jpg";
import a7 from "../assets/Images/a7.jpg";

const Section = styled.section`
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
    height: 100vh;
  }
`;

const Center = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;

  img {
    width: 50%;
    height: auto;
  }

  .big-img-1 {
    width: 50%;
    position: absolute;
    left: 0;
    top: 10%;
    z-index: 2;
  }

  .big-img-2 {
    width: 35%;
    position: absolute;
    right: 0;
    top: 30%;
    z-index: 1;
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

    .big-img-1 {
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
    }

    .big-img-2 {
      width: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
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

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-top: 2rem;
  }
`;

const Photo = () => {
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
          className="big-img-2"
          src={u3}
          alt=""
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        />
      </Center>
    </Section>
  );
};

export default Photo;
