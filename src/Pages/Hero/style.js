import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HeroSection = styled(Box)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: linear-gradient(135deg, rgba(13, 17, 23, 0.25) 0%, rgba(13, 17, 23, 0.1) 100%),
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

export const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: container.lg;
`;

export const ContentFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ base, md }) => `${base} 0`};
  
  @media (min-width: 48em) {
    align-items: flex-start;
    text-align: left;
    padding: ${({ md }) => `${md} 0`};
  }
`;

export const Title = styled(Heading)`
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  max-width: 3xl;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 62em) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Subtitle = styled(Text)`
  color: #efefef;
  max-width: 3xl;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  
  @media (min-width: 62em) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ButtonsContainer = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 30em) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled(Button)`
  padding: 1.5rem 2rem;
  font-size: 1.125rem;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px rgba(0, 123, 255, 0.4);
  }
`;

export const MotionDiv = styled(motion.div)`
  width: 100%;
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #007bff, #6a11cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
