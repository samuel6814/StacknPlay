import React from 'react';
import styled from 'styled-components';

// Create a styled div component
const HeroContainer = styled.div`
  padding: 2rem;
  background-color: #f0f0f0;
  text-align: center;
`;

// Create a styled h1 component
const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

// Create a styled p component
const Subtitle = styled.p`
  color: #555;
  font-size: 1.2rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Hello from your Hero Component!</Title>
      <Subtitle>If you can see this, your React app with styled-components is working correctly.</Subtitle>
    </HeroContainer>
  )
}

export default Hero;