import { useBreakpointValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { 
  HeroSection, 
  GlowingOrb, 
  ContentContainer, 
  ContentFlex, 
  Title, 
  Subtitle, 
  ButtonsContainer, 
  PrimaryButton, 
  MotionDiv,
  GradientText
} from './style';

const Hero = () => {
  const headingSize = useBreakpointValue({ base: '3xl', md: '5xl', lg: '6xl' });
  const subheadingSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  const firstOrbAnimation = {
    initial: { x: '-10%', y: '20%', width: '400px', height: '400px' },
    animate: {
      x: ['-10%', '10%', '-10%'],
      y: ['20%', '30%', '20%'],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }
  };

  const secondOrbAnimation = {
    initial: { x: '80%', y: '60%', width: '300px', height: '300px' },
    animate: {
      x: ['80%', '60%', '80%'],
      y: ['60%', '50%', '60%'],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay: 2,
    }
  };

  return (
    <HeroSection id="inicio">
      <GlowingOrb
        as={MotionDiv}
        initial={firstOrbAnimation.initial}
        animate={firstOrbAnimation.animate}
        transition={firstOrbAnimation.transition}
        bgGradient="linear(to-r, #007bff, #6a11cb)"
      />
      
      <GlowingOrb
        as={MotionDiv}
        initial={secondOrbAnimation.initial}
        animate={secondOrbAnimation.animate}
        transition={secondOrbAnimation.transition}
        bgGradient="linear(to-r, #6a11cb, #007bff)"
      />

      <ContentContainer>
        <ContentFlex base="80px" md="128px">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title as="h1" size={headingSize}>
              <GradientText>Resultados reais com IA</GradientText>: mais eficiência, mais vendas, menos custos
            </Title>

            <Subtitle fontSize={subheadingSize}>
              Criamos automações e agentes de IA que reduzem custos, aumentam suas vendas e otimizam processos. O futuro da sua empresa começa aqui.
            </Subtitle>

            <ButtonsContainer>
              <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
                <PrimaryButton variant="primary">
                  Agende uma reunião gratuita
                </PrimaryButton>
              </ScrollLink>
            </ButtonsContainer>
          </MotionDiv>
        </ContentFlex>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
