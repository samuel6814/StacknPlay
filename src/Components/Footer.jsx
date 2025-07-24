import React from 'react';
import styled from 'styled-components';
import { Twitter, Instagram, Twitch, Youtube } from 'lucide-react';

//============================================================================
// STYLED COMPONENTS
//============================================================================

/**
 * The main footer container.
 * It uses a dark background and a top border to separate it from page content.
 */
const FooterContainer = styled.footer`
  background-color: #000000;
  color: #a0a0a0;
  padding: 4rem 2rem 2rem 2rem;
  border-top: 2px solid #333;
`;

/**
 * A wrapper to constrain the footer content width and center it.
 */
const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

/**
 * A grid layout for the main footer content (links, social media).
 * It's responsive and stacks on smaller screens.
 */
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

/**
 * A container for a single column of links in the footer.
 */
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/**
 * The title for each column in the footer.
 */
const FooterTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
`;

/**
 * A single link in the footer.
 */
const FooterLink = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f472b6;
  }
`;

/**
 * Container for the social media icons.
 */
const SocialsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

/**
 * A wrapper for a social media icon link.
 */
const SocialIcon = styled.a`
  color: #ffffff;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f472b6;
    transform: scale(1.1);
  }
`;

/**
 * The bottom section of the footer containing copyright and credits.
 */
const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
`;

//============================================================================
// MAIN FOOTER COMPONENT
//============================================================================

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Stack&Play</FooterTitle>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#games">Games</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Community</FooterTitle>
            <FooterLink href="#community">Forums</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Events</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Follow Us</FooterTitle>
            <SocialsContainer>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitch">
                <Twitch />
              </SocialIcon>
              <SocialIcon href="#" aria-label="YouTube">
                <Youtube />
              </SocialIcon>
            </SocialsContainer>
          </FooterColumn>
        </FooterGrid>
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Stack&Play. All Rights Reserved.</p>
          <p>Created by trileon tech</p>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
