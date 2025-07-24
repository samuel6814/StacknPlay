import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from "./NavBar"

//============================================================================
// STYLED COMPONENTS
//============================================================================

/**
 * Global styles to be injected into the document.
 * Using "Anton" for the bold headline and "Inter" for the body text,
 * which mimic the style from the reference image.
 */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@700&display=swap');

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #000000;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/**
 * Main container for the hero section.
 * It's a flex container that centers the content and acts as a
 * positioning context for the decorative blob shapes.
 */
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden; 
`;

/**
 * A grid container to lay out the headline and description side-by-side.
 * It stacks into a single column on smaller screens for responsiveness.
 */
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  z-index: 2;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

/**
 * The main headline text. Uses the "Anton" font for a bold, blocky look.
 */
const Headline = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 8rem;
  font-weight: 400;
  margin: 0;
  line-height: 1;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }
  @media (max-width: 900px) {
    font-size: 5rem;
  }
   @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

/**
 * The descriptive text on the right side.
 */
const Description = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
   @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

/**
 * A styled component for the decorative, colorful blob shapes.
 * Props are used to control its appearance and position.
 */
const Blob = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  transform: rotate(${props => props.rotation || 0}deg);
  
  // Scale down blobs on smaller screens
  @media (max-width: 768px) {
    transform: rotate(${props => props.rotation || 0}deg) scale(0.7);
  }
`;


//============================================================================
// MAIN HERO COMPONENT
//============================================================================

const Hero = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <HeroContainer>
        {/* Decorative Blobs */}
        <Blob 
          color="#f472b6" 
          width="150px" 
          height="120px" 
          borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%" 
          top="10%" 
          left="45%"
          rotation={25}
        />
        <Blob 
          color="#facc15" 
          width="80px" 
          height="60px" 
          borderRadius="50%" 
          top="25%" 
          right="15%"
          rotation={-15}
        />
        <Blob 
          color="#4f46e5" 
          width="200px" 
          height="180px" 
          borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%" 
          bottom="5%" 
          left="5%"
          rotation={-30}
        />
         <Blob 
          color="#e11d48" 
          width="20px" 
          height="20px" 
          borderRadius="50%" 
          bottom="20%" 
          right="18%"
        />

        <ContentGrid>
          <Headline>
            STACK<br />& PLAY
          </Headline>
          <Description>
            A curated universe of gaming. Discover, compete, and conquer new worlds.
          </Description>
        </ContentGrid>

      </HeroContainer>
    </>
  );
};

export default Hero;
