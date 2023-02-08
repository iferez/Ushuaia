import { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import p1 from "../assets/Images/p1.png";
import p2 from "../assets/Images/p2.png";
import p3 from "../assets/Images/p3.png";
import p4 from "../assets/Images/p4.png";
import p5 from "../assets/Images/p5.png";
import p6 from "../assets/Images/p6.png";
import styled from "styled-components";

const dataProjects = [
  {
    id: 1,
    name: "PORTFOLIO",
    description:
      "Web con información personal, sobre mis estudios y experiencia",
    link: "https://iferez.github.io/",
    image: p1,
  },
  {
    id: 2,
    name: "AUTOGESTION",
    description:
      "Portal de autogestión, para realizar diferentes tipos de reclamos a entidades",
    link: "https://iferezautogestion.netlify.app/",
    image: p2,
  },
  {
    id: 3,
    name: "VECINO COSTERO",
    description:
      "Web del Municipio de la costa, donde se añadió una funcionalidad completamente nueva para un trabajo final sobre interfaces",
    link: "https://lacostainterfaces.netlify.app/home.html",
    image: p3,
  },
  {
    id: 4,
    name: "CODESARROLLO",
    description:
      "Proyecto dirigido a Startups y Empresas, orientado al sector productivo de la economía del conocimiento",
    link: "https://codesarrolloiferez.netlify.app/",
    image: p4,
  },
  {
    id: 5,
    name: "SISCO",
    description: "Sistema integrado de negociación, gestión de declaraciones juradas",
    link: "https://siscoiferez.netlify.app/",
    image: p5,
  },
  {
    id: 6,
    name: "FATURI",
    description: "Formulario de aceptación de las condiciones de uso de los recursos informáticos",
    link: "https://faturi.netlify.app/",
    image: p6,
  },
];

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 0;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;


const Right = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: end;

  article{
    width: 60%;

    div{
        background-color: #ffff;
        text-align: center;

        h5{
            font-size: 2rem;
            font-weight: bold;
            margin: 1.2rem 0
          }
    }
  }

  @media (max-width: 48em) {
    align-items: center;

    article{
      width: 80%;
  
      div{
          h5{
              font-size: 1.2rem;
            }
            p{
              font-size: 0.8rem;
            }
      }
    }
  }
`;


function Project() {
  const ref = useRef(null);
  const [data, setData] = useState(dataProjects);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-2">
        PROYECTOS
      </Title>
      <Right data-scroll>
        <article
          id="carousel"
          className="carousel carousel-dark slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner shadow-lg">
            {data.map((el) => (
              <div
                key={el.id}
                className={`carousel-item ${el.id === 1 ? "active" : ""}`}
              >
                <a href={el.link} target="_blank">
                  <img src={el.image} className="d-block w-100" alt={el.name} />
                </a>
                <div className="info-project">
                  <h5>{el.name}</h5>
                  <p>{el.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </article>
      </Right>
    </Section>
  );
}

export default Project;
