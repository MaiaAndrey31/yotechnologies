import { Box, Container, Text, Button, VStack, HStack, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaCheckCircle, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CasesSection, SectionContainer, HeaderBox, SectionTitle, SectionDescription } from './style';

const Cases = () => {
  const caseStudies = [
    {
      industry: "Varejo",
      client: "Rede de Lojas de Moda",
      challenge: "Atendimento ineficiente e alto custo operacional",
      solution: "Implementação de agente de IA para atendimento multicanal",
      results: [
        "+45% de aumento nas vendas",
        "Redução de 60% nos custos com SAC",
        "Satisfação do cliente: 4.8/5"
      ],
      logo: "👕"
    },
    {
      industry: "Fintech",
      client: "Plataforma de Investimentos",
      challenge: "Processos manuais de análise de perfil de investidor",
      solution: "Automação com IA para análise preditiva",
      results: [
        "+70% de precisão nas recomendações",
        "Tempo de análise reduzido em 85%",
        "Aumento de 2,5x na retenção de clientes"
      ],
      logo: "💳"
    },
    {
      industry: "Saúde",
      client: "Rede de Clínicas",
      challenge: "Gestão ineficiente de agendamentos e prontuários",
      solution: "Sistema integrado de gestão com IA",
      results: [
        "Redução de 75% nas faltas",
        "Aumento de 30% na capacidade de atendimento",
        "Economia de 20 horas/semana em processos manuais"
      ],
      logo: "🏥"
    }
  ];

  return (
    <CasesSection id="cases">
      <SectionContainer>
        <HeaderBox>
          <SectionTitle>Casos de Sucesso</SectionTitle>
          <SectionDescription>
            Veja como transformamos desafios em resultados extraordinários para nossos clientes
          </SectionDescription>
        </HeaderBox>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} mb={12}>
          {caseStudies.map((caseStudy, index) => (
            <Box
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              bg="whiteAlpha.50"
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              height="100%"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            >
              <Text fontSize="4xl" mb={4} textAlign="center">{caseStudy.logo}</Text>
              <Text color="blue.300" fontWeight="bold" mb={1}>{caseStudy.industry}</Text>
              <Text fontSize="lg" fontWeight="bold" mb={4}>{caseStudy.client}</Text>
              
              <Text color="gray.400" fontSize="sm" mb={4}>
                <Text as="span" color="white" fontWeight="medium">Desafio:</Text> {caseStudy.challenge}
              </Text>
              
              <Text color="gray.400" fontSize="sm" mb={4}>
                <Text as="span" color="white" fontWeight="medium">Solução:</Text> {caseStudy.solution}
              </Text>
              
              <Text color="white" fontWeight="medium" mb={2}>Resultados:</Text>
              <VStack align="start" spacing={2} mb={6}>
                {caseStudy.results.map((result, i) => (
                  <HStack key={i} spacing={2}>
                    <Icon as={FaCheckCircle} color="green.400" boxSize={4} />
                    <Text color="gray.300" fontSize="sm">{result}</Text>
                  </HStack>
                ))}
              </VStack>
              
              <Button
                as={motion.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                colorScheme="blue"
                variant="outline"
                size="sm"
                w="100%"
                rightIcon={<Icon as={FaArrowRight} />}
              >
                Ver estudo completo
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        
        <Box textAlign="center" mt={8}>
          <Text color="gray.400" mb={4}>
            Quer resultados semelhantes para o seu negócio?
          </Text>
          <Button 
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            colorScheme="blue"
            size="lg"
            rightIcon={<Icon as={FaWhatsapp} />}
          >
            Fale com nossos especialistas
          </Button>
        </Box>
      </SectionContainer>
    </CasesSection>
  );
};

export default Cases;