import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HeroSection = styled(Box)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: linear-gradient(135deg, rgba(13, 17, 23, 0.7) 0%, rgba(13, 17, 23, 0.75) 100%),
    url('https://images.pexels.com/photos/17483867/pexels-photo-17483867.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const GlowingOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 0;
`;
