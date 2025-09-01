import { Box, Container } from '@chakra-ui/react';

export const sectionStyles = {
  as: 'section',
  id: 'contato',
  padding: '20px',
  bg: 'transparent',
  position: 'relative',
  minH: 'auto',
  display: 'block',
  w: '100%'
};

export const backgroundStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  opacity: 0.8,
  
  pointerEvents: 'none'
};

export const glitchStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '150vh',
  glitchSpeed: 50,
  centerVignette: true,
  outerVignette: false,
  smooth: true
};

export const containerStyles = {
  maxW: 'container.xl',
  position: 'relative',
  zIndex: 1,
  bg: 'rgba(13, 17, 23, 0.85)',
  borderRadius: 'lg',
  p: { base: 1, md: 6 },
  my: 40,
  boxShadow: '2xl',
  border: '1px groove',
  borderColor: 'whiteAlpha.100',
  transform: 'translateY(0)'
};

export const headingStyles = (headingSize) => ({
  as: 'h2',
  size: headingSize,
  mb: 6,
  fontWeight: 'bold'
});

export const gradientTextStyles = {
  bgGradient: 'linear(to-r, #007bff, #6a11cb)',
  bgClip: 'text'
};

export const descriptionStyles = {
  fontSize: { base: 'md', md: 'xl' },
  color: 'gray.400'
};

export const formControlStyles = {
  isRequired: true
};

export const inputStyles = (inputBg, inputBorder, inputFocusBorder) => ({
  type: 'text',
  placeholder: 'Seu nome',
  autoComplete: 'name',
  bg: inputBg,
  borderColor: inputBorder,
  _hover: { borderColor: inputFocusBorder },
  _focus: {
    borderColor: inputFocusBorder,
    boxShadow: `0 0 0 1px ${inputFocusBorder}`
  },
  size: 'lg'
});

export const textareaStyles = (inputBg, inputBorder, inputFocusBorder) => ({
  placeholder: 'Sua mensagem...',
  rows: 6,
  resize: 'none',
  bg: inputBg,
  borderColor: inputBorder,
  _hover: { borderColor: inputFocusBorder },
  _focus: {
    borderColor: inputFocusBorder,
    boxShadow: `0 0 0 1px ${inputFocusBorder}`
  },
  size: 'lg'
});

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