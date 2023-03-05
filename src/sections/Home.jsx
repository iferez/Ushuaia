import React, { Suspense } from "react";
import styled from "styled-components";

const CoverVideo = React.lazy(() => import("../components/CoverVideo"));
const Navbar = React.lazy(() => import("../components/Navbar"));

const Section = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Navbar />
        <CoverVideo />
      </Suspense>
    </Section>
  );
};

export default Home;
