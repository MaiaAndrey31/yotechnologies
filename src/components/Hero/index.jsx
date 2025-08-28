import { Box, Button, Container, Flex, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { HeroSection, GlowingOrb } from './style';

const Hero = () => {
  const headingSize = useBreakpointValue({ base: '3xl', md: '5xl', lg: '6xl' });
  const subheadingSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <HeroSection id="inicio">
      {/* Animated Background Elements */}
      <GlowingOrb
        as={motion.div}
        initial={{ x: '-10%', y: '20%', width: '400px', height: '400px' }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['20%', '30%', '20%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        bgGradient="linear(to-r, #007bff, #6a11cb)"
      />
      
      <GlowingOrb
        as={motion.div}
        initial={{ x: '80%', y: '60%', width: '300px', height: '300px' }}
        animate={{
          x: ['80%', '60%', '80%'],
          y: ['60%', '50%', '60%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2,
        }}
        bgGradient="linear(to-r, #6a11cb, #007bff)"
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex
          direction="column"
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          py={{ base: 20, md: 32 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size={headingSize}
              fontWeight="bold"
              lineHeight="1.1"
              mb={6}
              maxW="3xl"
              mx={{ base: 'auto', lg: 0 }}
            >
              
              <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
              Resultados reais com IA
              </Box>
               : mais eficiência, mais vendas, menos custos
            </Heading>

            <Text
              fontSize={subheadingSize}
              color="gray.300"
              maxW="3xl"
              mb={10}
              mx={{ base: 'auto', lg: 0 }}
              lineHeight="tall"
            >
              Criamos automações e agentes de IA que reduzem custos, aumentam suas vendas e otimizam processos. O futuro da sua empresa começa aqui.
            </Text>

            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={4}
              justify={{ base: 'center', lg: 'flex-start' }}
            >
              <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
                <Button
                  size="lg"
                  variant="primary"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px -5px rgba(0, 123, 255, 0.4)',
                  }}
                  transition="all 0.3s"
                >
                  Agende uma reunião gratuita
                </Button>
              </ScrollLink>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </HeroSection>
  );
};

export default Hero;
