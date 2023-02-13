import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import c1 from "../assets/Images/c1.jpg";
import tren from "../assets/Images/ctren.jpg";
import malvinas from "../assets/Images/cmalvinas.jpg";
import museo from "../assets/Images/cmuseo.jpg";
import reserva from "../assets/Images/creserva.jpg";

const Section = styled(motion.section)`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;
  @media (max-width: 30em) {
  }
`;

const Col = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(40 * 1px);
    overflow: hidden;
    text-decoration: none;
    max-width: 350px;
    max-height: 250px;
  }

  .card__image {
    width: 100%;
    height: auto;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(40 * 1px);
    background-color: #fff;
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1em 2em;
    border-radius: calc(40 * 1px) 0 0 0;
    background-color: #fff;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }

  .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card__arc path {
    fill: #fff;
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
  }

  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 1.3em;
    font-weight: bold;
    margin: 0 0 0.3em;
    color: #6a515e;
  }

  .card__tagline {
    display: block;
    margin: 1em 0;
    font-family: "MockFlowFont";
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__status {
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #030303;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  @media (max-width: 30em) {
  }
`;

const Activity = () => {
  const ref = useRef(null);
  return (
    <Section ref={ref} id="shop" className="row">
      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-2"
      >
        <div class="card">
          <img src={tren} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Tren del fin del mundo</h3>
              </div>
            </div>
            <p class="card__description">
              Atraviesa bosques de lenga y ñire, turbales y el río Pipo. Cuenta
              la historia de los presos que cumplieron su pena en Ushuaia.
            </p>
          </div>
        </div>
      </Col>

      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-2"
      >
        <div class="card">
          <img src={malvinas} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Espacio Malvinas</h3>
              </div>
            </div>
            <p class="card__description">
              La historia y la cercanía vinculan a Ushuaia con las Islas
              Malvinas de una manera muy fuerte.
            </p>
          </div>
        </div>
      </Col>

      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="-2"
      >
        <div class="card">
          <img src={museo} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Museo</h3>
              </div>
            </div>
            <p class="card__description">
              Es una pieza viva de nuestra historia, compuesto por los antiguos
              testigos y piezas fundamentales en el desarrollo de la ciudad.
            </p>
          </div>
        </div>
      </Col>

      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="2"
      >
        <div class="card">
          <img src={reserva} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Reserva Natural “Bahía Encerrada”</h3>
              </div>
            </div>
            <p class="card__description">
              Funciona como pulmón verde, como protección de cuencas y costas,
              conserva especies silvestres y contribuye con fenómenos naturales
            </p>
          </div>
        </div>
      </Col>

      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="2"
      >
        <div class="card">
          <img src={malvinas} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Espacio Malvinas</h3>
              </div>
            </div>
            <p class="card__description">
              La historia y la cercanía vinculan a Ushuaia con las Islas
              Malvinas de una manera muy fuerte.
            </p>
          </div>
        </div>
      </Col>

      <Col
        className="col-md-4"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="2"
      >
        <div class="card">
          <img src={museo} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">Museo</h3>
              </div>
            </div>
            <p class="card__description">
              Es una pieza viva de nuestra historia, compuesto por los antiguos
              testigos y piezas fundamentales en el desarrollo de la ciudad.
            </p>
          </div>
        </div>
      </Col>
    </Section>
  );
};

export default Activity;
