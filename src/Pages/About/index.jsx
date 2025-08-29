import { useBreakpointValue, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa';
import FeatureCard from '../../components/FeatureCard';
import {
  AboutSection,
  SectionContainer,
  HeaderBox,
  SectionTitle,
  GradientText,
  SubtitleText,
  FeaturesGrid,
  FeatureCardWrapper,
  CtaBox,
  CtaButton,
  TopLeftOrb,
  BottomRightOrb
} from './style';

const About = () => {
  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const gridColumns = useBreakpointValue({ base: 1, md: 3 });

  const features = [
    {
      icon: FaRobot,
      title: 'Foco no seu Resultado',
      description: 'Não vendemos tecnologia, vendemos resultados. Nossas soluções são 100% personalizadas para resolver os desafios reais do seu negócio e impulsionar seus KPIs.'
    },
    {
      icon: FaChartLine,
      title: 'Credibilidade e Experiência',
      description: 'Com um time de especialistas e cases de sucesso, garantimos a implementação de soluções de IA que funcionam e trazem retorno sobre o investimento.'
    },
    {
      icon: FaLightbulb,
      title: 'Parceria Estratégica',
      description: 'Atuamos como um parceiro estratégico, entendendo suas metas para aplicar a tecnologia certa, na hora certa. Seu sucesso é o nosso sucesso.'
    }
  ];

  const featureVariants = (index) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: index * 0.2 }
  });

  return (
    <AboutSection id="sobre" sx={{ py: sectionPadding }}>
      <SectionContainer>
        <HeaderBox>
          <Text
            as="span"
            color="brand.400"
            fontWeight="semibold"
            letterSpacing="wider"
            textTransform="uppercase"
            fontSize="sm"
          >
            Quem Somos
          </Text>
          
          <SectionTitle as="h2" size={headingSize}>
            Do potencial da IA aos{' '}
            <GradientText>resultados que importam</GradientText>
          </SectionTitle>
          
          <SubtitleText fontSize={textSize} maxW="3xl" mx="auto">
            Na Yo Technologies, tornamos a IA simples e acessível para o seu negócio. 
            Aplicamos tecnologia onde mais importa: mais eficiência, menos custos e crescimento mensurável.
          </SubtitleText>
        </HeaderBox>

        <FeaturesGrid columns={gridColumns} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <FeatureCardWrapper
              key={index}
              as={motion.div}
              {...featureVariants(index)}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </FeatureCardWrapper>
          ))}
        </FeaturesGrid>

        <CtaBox>
          <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
            <CtaButton size="lg" variant="primary">
              Descubra como aplicar IA no seu negócio
            </CtaButton>
          </ScrollLink>
        </CtaBox>
      </SectionContainer>

      <TopLeftOrb />
      <BottomRightOrb />
    </AboutSection>
  );
};

export default About;
