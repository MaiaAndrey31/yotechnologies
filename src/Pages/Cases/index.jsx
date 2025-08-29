import { useBreakpointValue, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';
import StatCard from '../../components/StatCard';
import CaseStudyCard from '../CaseStudyCard';
import {
  CasesSection,
  SectionContainer,
  HeaderBox,
  SectionTitle,
  GradientText,
  SectionDescription,
  StatsGrid,
  CtaBox,
  CtaButton,
  CaseStudiesSection,
  CaseStudiesTitle,
  CaseStudiesGrid,
  TopRightOrb,
  BottomLeftOrb
} from './style';

const Cases = () => {
  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const statsColumns = useBreakpointValue({ base: 1, md: 3 });
  const caseStudiesColumns = useBreakpointValue({ base: 1, lg: 3 });

  const stats = [
    {
      icon: FaChartLine,
      value: '+300%',
      label: 'Aumento na eficiência de atendimento',
    },
    {
      icon: FaDollarSign,
      value: '40%',
      label: 'Redução de custos operacionais',
    },
    {
      icon: FaUsers,
      value: '24/7',
      label: 'Atendimento ininterrupto',
    },
  ];

  const caseStudies = [
    {
      title: 'Varejo Inteligente',
      description:
        'Implementação de chatbot com IA para atendimento ao cliente em rede de varejo, integrado ao sistema de pedidos e estoque.',
      impact: 'Redução de 70% no tempo de resposta ao cliente e aumento de 45% nas vendas diretas pelo chatbot.',
    },
    {
      title: 'Fintech',
      description:
        'Solução de automação para análise de crédito e aprovação de empréstimos usando machine learning.',
      impact: 'Redução de 60% no tempo de análise de crédito e aumento de 35% na aprovação de clientes qualificados.',
    },
    {
      title: 'Saúde Digital',
      description:
        'Plataforma de agendamento e atendimento médico com assistente virtual integrado para triagem inicial.',
      impact: 'Otimização de 80% no agendamento de consultas e redução de 50% nas faltas com lembretes automáticos.',
    },
  ];

  return (
    <CasesSection id="cases" sx={{ py: sectionPadding }}>
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
            Nossos Resultados
          </Text>
          
          <SectionTitle as="h2" size={headingSize}>
            Impacto real para nossos{' '}
            <GradientText>clientes</GradientText>
          </SectionTitle>
          
          <SectionDescription fontSize={textSize} maxW="3xl" mx="auto">
            Números que importam para o seu crescimento. Resultados reais, entregues com Inteligência Artificial aplicada ao seu negócio.
          </SectionDescription>
        </HeaderBox>

        <StatsGrid columns={statsColumns} spacing={8} mb={10}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </StatsGrid>

        <CtaBox>
          <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
            <CtaButton variant="primary">
              Agende uma demonstração e veja na prática
            </CtaButton>
          </ScrollLink>
        </CtaBox>

        <CaseStudiesSection>
          <CaseStudiesTitle as="h3" size="xl">
            Estudos de Caso
          </CaseStudiesTitle>
          
          <CaseStudiesGrid columns={caseStudiesColumns} spacing={8}>
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                impact={caseStudy.impact}
                index={index}
              />
            ))}
          </CaseStudiesGrid>
        </CaseStudiesSection>
      </SectionContainer>

      <TopRightOrb />
      <BottomLeftOrb />
    </CasesSection>
  );
};

export default Cases;
