import { Box, Container, Text, VStack, HStack, Input, Textarea, Button, FormControl, FormLabel, SimpleGrid, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

// Styled Components
export const ContactSection = styled(Box)`
  padding: 6rem 0;
  background: #1a202c;
  color: white;
  position: relative;
  overflow: hidden;
`;

export const GlitchBackground = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.3;
  pointer-events: none;
`;

export const ContactContainer = styled(Container)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const ContactGrid = styled(SimpleGrid)`
  align-items: center;
  gap: 3rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactContent = styled(Box)``;

export const ContactTitle = styled(Text)`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #4299e1 0%, #9f7aea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ContactDescription = styled(Text)`
  color: #a0aec0;
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

export const FeatureList = styled(VStack)`
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FeatureItem = styled(HStack)`
  gap: 1rem;
`;

export const FeatureIcon = styled(Icon)`
  color: #48bb78;
  font-size: 1.25rem;
`;

export const FeatureText = styled(Text)`
  color: #e2e8f0;
`;

export const ContactInfo = styled(HStack)`
  gap: 1rem;
  margin-top: 2rem;
`;

export const ContactInfoIcon = styled(Icon)`
  color: #48bb78;
  font-size: 1.5rem;
`;

export const ContactInfoText = styled(Box)``;

export const ContactInfoLabel = styled(Text)`
  color: #a0aec0;
  font-size: 0.875rem;
`;

export const ContactInfoLink = styled(ChakraLink)`
  color: white;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const GlitchContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ContactForm = styled(Box)`
  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(3px);
    z-index: 2;
    border-radius: 0.5rem;
  }
  
  & > * {
    position: relative;
    z-index: 3;
  }
`;

export const FormGroup = styled(FormControl)`
  margin-bottom: 1.5rem;
`;

export const FormLabelStyled = styled(FormLabel)`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #2d3748;
`;

export const InputStyled = styled(Input)`
  height: 3rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  &:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 1px #4299e1;
  }
`;

export const TextareaStyled = styled(Textarea)`
  min-height: 9rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  &:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 1px #4299e1;
  }
`;

export const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  font-weight: 600;
  color: white;
  background-color: #4299e1;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #3182ce;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const FormFooter = styled(Text)`
  color: #718096;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.5rem;
`;

export const buttonStyles = {
  type: 'submit',
  colorScheme: 'blue',
  size: 'lg',
  isLoading: false,
  loadingText: 'Enviando...',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: 'lg'
  },
  _active: {
    transform: 'translateY(0)'
  }
};

export const contactCardStyles = {
  p: 6,
  bg: 'whiteAlpha.50',
  borderRadius: 'lg',
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: 'whiteAlpha.200',
  h: '100%'
};

export const contactIconStyles = {
  color: 'blue.400',
  fontSize: '2xl',
  mb: 4
};

export const contactHeadingStyles = {
  fontSize: 'lg',
  fontWeight: 'semibold',
  mb: 2
};

export const contactTextStyles = {
  color: 'gray.400',
  fontSize: 'md'
};