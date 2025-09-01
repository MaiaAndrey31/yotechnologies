import { Box, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the LetterGlitch component with SSR disabled
const LetterGlitch = dynamic(
  () => import('../LetterGlitch'),
  { ssr: false }
);

const GlitchBackground = ({ children, ...rest }) => {
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)');

  return (
    <Box 
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
      borderRadius="0.5rem"
      {...rest}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
      >
        <LetterGlitch 
          glitchColors={['#4299e1', '#9f7aea', '#efefef']}
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={false}
        />
      </Box>
      
      <Box
        position="relative"
        zIndex={2}
        width="100%"
        height="100%"
        bg={bgColor}
        backdropFilter="blur(3px)"
        p={8}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GlitchBackground;
