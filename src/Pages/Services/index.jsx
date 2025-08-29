import { Box, Container, Flex, Heading, Text, SimpleGrid, Icon, VStack, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCogs, FaHeadset, FaShieldAlt, FaBrain } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.03)"
        p={8}
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
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        _hover={{
          borderColor: 'brand.500',
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px -5px rgba(0, 123, 255, 0.2)',
          '&:before': {
            opacity: 1,
          },
        }}
        transition="all 0.3s ease"
      >
        <VStack spacing={6} align="flex-start" h="100%">
          <Box
            p={3}
            bgGradient="linear(to-r, #007bff, #6a11cb)"
            color="white"
            borderRadius="lg"
            display="inline-flex"
          >
            <Icon as={icon} boxSize={6} />
          </Box>
          <VStack spacing={4} align="flex-start" flex={1}>
            <Heading as="h3" size="lg" color="white">
              {title}
            </Heading>
            <Text color="gray.400">{description}</Text>
          </VStack>
          <Box
            as="span"
            color="brand.400"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            mt={2}
            _hover={{
              color: 'brand.300',
              '& svg': {
                transform: 'translateX(4px)',
              },
            }}
          >
            Saiba mais
            <Box as="span" ml={2} transition="transform 0.3s ease">
              →
            </Box>
          </Box>
        </VStack>
      </Box>
    </motion.div>
  );
};

const Services = () => {
  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });

  const services = [
    {
      icon: FaHeadset,
      title: 'Agentes de IA para Atendimento',
      description: 'Bots inteligentes que operam 24/7, reduzem seus custos operacionais e elevam a satisfação dos seus clientes a um novo patamar.'
    },
    {
      icon: FaChartLine,
      title: 'Automações de Vendas',
      description: 'Crie funis de vendas inteligentes que qualificam e nutrem leads automaticamente, convertendo mais e melhor com menos esforço.'
    },
    {
      icon: FaCogs,
      title: 'Integrações Personalizadas',
      description: 'Conectamos suas ferramentas e sistemas, criando fluxos de trabalho automáticos que eliminam tarefas repetitivas e aumentam a produtividade.'
    },
    {
      icon: FaBrain,
      title: 'Suporte Inteligente',
      description: 'Nossa IA aprende com cada interação para oferecer um suporte ao cliente que não apenas resolve, mas também antecipa problemas.'
    },
    {
      icon: FaShieldAlt,
      title: 'Segurança e Compliance',
      description: 'Garantimos proteção total para seus dados e os de seus clientes com as mais rigorosas práticas de segurança e conformidade.'
    },
    {
      icon: FaRobot,
      title: 'Machine Learning Avançado',
      description: 'Transforme dados brutos em insights preditivos. Antecipe tendências de mercado e tome decisões mais inteligentes com nossos modelos de ML.'
    }
  ];

  return (
    <Box as="section" id="servicos" py={sectionPadding} bg="rgba(13, 17, 23, 0.8)" position="relative" overflow="hidden">
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
            Nossos Serviços
          </Text>
          <Heading as="h2" size={headingSize} mb={6} fontWeight="bold">
            Como a Inteligência Artificial pode{' '}
            <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
              acelerar seu negócio
            </Box>
          </Heading>
          <Box maxW="3xl" mx="auto">
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
              Oferecemos um arsenal de soluções de IA prontas para resolver os maiores desafios da sua empresa. 
              Descubra como nossa tecnologia pode trabalhar para você.
            </Text>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* Decorative elements */}
      <Box
        position="absolute"
        top="20%"
        right="-150px"
        w="600px"
        h="600px"
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

export default Services;
