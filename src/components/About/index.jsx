import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Icon, useBreakpointValue, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.03)"
      p={8}
      borderRadius="lg"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      _hover={{
        transform: 'translateY(-5px)',
        borderColor: 'brand.500',
        boxShadow: '0 10px 25px -5px rgba(0, 123, 255, 0.2)',
      }}
      transition="all 0.3s ease"
      height="100%"
    >
      <Flex direction="column" alignItems="center" textAlign="center" h="100%">
        <Box
          mb={6}
          p={4}
          bgGradient="linear(to-r, #007bff, #6a11cb)"
          color="white"
          borderRadius="full"
          boxSize="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} boxSize={8} />
        </Box>
        <Heading as="h3" size="lg" mb={4} color="white">
          {title}
        </Heading>
        <Text color="gray.400">{description}</Text>
      </Flex>
    </Box>
  );
};

const About = () => {
  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });

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

  return (
    <Box as="section" id="sobre" py={sectionPadding} position="relative" overflow="hidden">
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
            Sobre Nós
          </Text>
          <Heading as="h2" size={headingSize} mb={6} fontWeight="bold">
            Do potencial da IA aos{' '}
            <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
              resultados que importam
            </Box>
          </Heading>
          <Box maxW="3xl" mx="auto">
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
              Na Yo Technologies, tornamos a IA simples e acessível para o seu negócio. 
              Aplicamos tecnologia onde mais importa: mais eficiência, menos custos e crescimento mensurável.
            </Text>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </SimpleGrid>

        <Box textAlign="center" mt={20}>
          <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
            <Button size="lg" variant="primary">
              Descubra como aplicar IA no seu negócio
            </Button>
          </ScrollLink>
        </Box>
      </Container>

      {/* Decorative elements */}
      <Box
        position="absolute"
        top="10%"
        left="-100px"
        w="400px"
        h="400px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(0, 123, 255, 0.1) 0%, rgba(0, 123, 255, 0) 70%)"
        zIndex={-1}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-150px"
        w="500px"
        h="500px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(106, 17, 203, 0.1) 0%, rgba(106, 17, 203, 0) 70%)"
        zIndex={-1}
      />
    </Box>
  );
};

export default About;
