import { Box, Container, Flex, Heading, Text, SimpleGrid, VStack, useBreakpointValue, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';

const StatCard = ({ icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <VStack
        spacing={4}
        p={8}
        bg="rgba(255, 255, 255, 0.03)"
        borderRadius="lg"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.1)"
        height="100%"
        _hover={{
          borderColor: 'brand.500',
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px -5px rgba(0, 123, 255, 0.2)',
        }}
        transition="all 0.3s ease"
      >
        <Box
          p={4}
          bgGradient="linear(to-r, #007bff, #6a11cb)"
          color="white"
          borderRadius="lg"
          display="inline-flex"
        >
          <Box as={icon} size={24} />
        </Box>
        <Heading as="h3" size="2xl" fontWeight="bold" color="white">
          {value}
        </Heading>
        <Text color="gray.400" textAlign="center">
          {label}
        </Text>
      </VStack>
    </motion.div>
  );
};

const CaseStudyCard = ({ title, description, impact, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <Box
        p={8}
        bg="rgba(255, 255, 255, 0.03)"
        borderRadius="lg"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.1)"
        height="100%"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bgGradient: 'linear(to-r, #007bff, #6a11cb)',
        }}
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px -5px rgba(0, 123, 255, 0.2)',
        }}
        transition="all 0.3s ease"
      >
        <VStack spacing={6} align="flex-start">
          <Heading as="h3" size="lg" color="white">
            {title}
          </Heading>
          <Text color="gray.400">{description}</Text>
          <Box width="100%" pt={4} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
            <Text fontWeight="medium" color="brand.300" mb={2}>
              Impacto:
            </Text>
            <Text color="gray.400">{impact}</Text>
          </Box>
          <Text color="gray.300" mt={4}>
            Quer o mesmo resultado? Fale com a gente.
          </Text>
          <Box mt={2}>
            <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
              <Button size="sm" variant="primary">Fale com a gente</Button>
            </ScrollLink>
          </Box>
        </VStack>
      </Box>
    </motion.div>
  );
};

const Cases = () => {
  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });

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
    <Box as="section" id="cases" py={sectionPadding} position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={20}>
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
          <Heading as="h2" size={headingSize} mb={6} fontWeight="bold">
            Impacto real para nossos{' '}
            <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
              clientes
            </Box>
          </Heading>
          <Box maxW="3xl" mx="auto">
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
              Números que importam para o seu crescimento. Resultados reais, entregues com Inteligência Artificial aplicada ao seu negócio.
            </Text>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={10}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </SimpleGrid>

        <Box textAlign="center" mb={20}>
          <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
            <Button size="lg" variant="primary">
              Agende uma demonstração e veja na prática
            </Button>
          </ScrollLink>
        </Box>

        <Box>
          <Heading as="h3" size="xl" mb={10} textAlign="center">
            Estudos de Caso
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                impact={caseStudy.impact}
                index={index}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="-150px"
        w="500px"
        h="500px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 70%)"
        zIndex={-1}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="-200px"
        w="400px"
        h="400px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(106, 17, 203, 0.1) 0%, rgba(106, 17, 203, 0) 70%)"
        zIndex={-1}
      />
    </Box>
  );
};

export default Cases;
