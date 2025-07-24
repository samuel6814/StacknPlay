import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

//============================================================================
// STYLED COMPONENTS
//============================================================================

/**
 * The main navigation container.
 * It's a flex container to space out the logo, links, and button.
 * It becomes fixed at the top of the viewport.
 */
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 2px solid #333;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/**
 * The site logo. Uses the "Anton" font to match the hero headline.
 */
const Logo = styled.a`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

/**
 * Container for the navigation links.
 * On mobile, it transforms into a full-screen overlay.
 */
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000000;
    gap: 2.5rem;
  }
`;

/**
 * A single navigation link.
 */
const NavLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f472b6;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #f472b6;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

/**
 * A call-to-action button.
 */
const CtaButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  background-color: #f472b6;
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`;

/**
 * The hamburger menu icon for mobile view.
 */
const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001; // Ensure it's above the mobile menu overlay

  @media (max-width: 768px) {
    display: block;
  }
`;

//============================================================================
// MAIN NAVBAR COMPONENT
//============================================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Logo href="#">Stack&Play</Logo>
      
      <MobileMenuIcon onClick={toggleMenu}>
        {isOpen ? <X size={32} color="#ffffff" /> : <Menu size={32} color="#ffffff" />}
      </MobileMenuIcon>

      <NavLinks isOpen={isOpen}>
        <NavLink href="#games" onClick={() => setIsOpen(false)}>Games</NavLink>
        <NavLink href="#tournaments" onClick={() => setIsOpen(false)}>Tournaments</NavLink>
        <NavLink href="#community" onClick={() => setIsOpen(false)}>Community</NavLink>
        <NavLink href="#store" onClick={() => setIsOpen(false)}>Store</NavLink>
        <CtaButton onClick={() => setIsOpen(false)}>Sign Up</CtaButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
