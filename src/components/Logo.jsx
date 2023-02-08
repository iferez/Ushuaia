import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logoif from "../assets/Images/ivanferezlg.jpg";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;

  img{
    width: 60px;
    border-radius: 50%;
    margin-left: 0.5rem;
  }
`;

const imgVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        

        <Text variants={imgVariants} initial="hidden" animate="visible">
        <img src={Logoif} alt="Logo iFerez" />
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
