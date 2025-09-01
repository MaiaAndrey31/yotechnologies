import { useBreakpointValue, useColorModeValue, Box, HStack, Flex, VStack, Text, Button, Icon, SimpleGrid, Grid, GridItem, Link as ChakraLink, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { 
  FaRobot, 
  FaChartLine, 
  FaHandshake, 
  FaRocket, 
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaChartBar,
  FaUsers,
  FaArrowRight,
  FaClock,
  FaPlug,
  FaUserClock,
  FaShoppingCart,
  FaHeadset,
  FaShieldAlt,
  FaBrain,
  FaCheck
} from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import {
  AboutSection,
  SectionContainer,
  HeaderBox,
  SectionTitle,
  GradientText,
  FeaturesGrid,
  FeatureCardWrapper,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  ListIcon,
  ResponsiveGrid
} from './style'

const About = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' })
  const gridColumns = useBreakpointValue({ base: 1, md: 3 })

  const features = [
    {
      icon: FaRobot,
      title: 'Automação Inteligente',
      description:
        'Soluções de IA que eliminam processos manuais e aumentam a eficiência operacional em até 70%.',
    },
    {
      icon: FaChartLine,
      title: 'Crescimento Escalável',
      description:
        'Estrutura flexível que cresce junto com o seu negócio, de pequenas a grandes empresas.',
    },
    {
      icon: FaHandshake,
      title: 'Parceria Estratégica',
      description:
        'Atuamos como extensão da sua equipe, alinhando tecnologia às suas metas de negócio.',
    },
    {
      icon: FaRocket,
      title: 'Implementação Rápida',
      description:
        'Soluções prontas em semanas, não em meses, com suporte dedicado em cada etapa.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Visão de Mercado',
      description:
        'Atuamos em diversos setores, com soluções adaptáveis a diferentes realidades de negócio.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Custo-Benefício',
      description:
        'Planos acessíveis a partir de R$ 497/mês, com retorno garantido sobre o investimento.',
    },
  ]

  const stats = [
    { value: '70%+', label: 'Aumento de produtividade', icon: FaChartBar },
    { value: 'R$10K', label: 'Meta mensal em 3 meses', icon: BsGraphUp },
    { value: '12', label: 'Meses para escala', icon: GiProgression },
    { value: '100', label: 'Clientes em 1 ano', icon: FaUsers },
  ]

  const businessModel = [
    'Receita recorrente mensal',
    'Upsell de serviços personalizados',
    'Parcerias estratégicas',
    'Ticket médio de R$ 997/mês'
  ]

  const featureVariants = (index) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: index * 0.2 },
  })

  return (
    <Box>
      <AboutSection id='sobre'>
        <SectionContainer>
        <HeaderBox>
          <SectionTitle as='h1' size={headingSize}>
            <GradientText>Automação Inteligente</GradientText> que Aumenta Lucros: +40% em Eficiência
          </SectionTitle>

          <Box mt={8} textAlign="center">
            <Text fontSize="xl" color="gray.300" maxW="2xl" mx="auto" mb={8}>
              Soluções de IA personalizadas que transformam operações em resultados reais e mensuráveis para seu negócio
            </Text>
            
            <HStack spacing={4} justify="center" mb={12}>
              <Button 
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                colorScheme="blue" 
                size="lg"
                rightIcon={<Icon as={FaArrowRight} />}
              >
                Solicitar diagnóstico gratuito
              </Button>
              <Button 
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outline" 
                colorScheme="whiteAlpha"
                size="lg"
              >
                Ver soluções em ação
              </Button>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="4xl" mx="auto">
              {[
                "✅ Até 70% de redução em processos manuais",
                "🚀 Média de 40% de economia operacional",
                "📈 ROI positivo em até 90 dias"
              ].map((item, index) => (
                <HStack key={index} spacing={3} color="whiteAlpha.800" justify={{ base: 'center', md: 'flex-start' }}>
                  <Text fontSize="lg">{item}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>
        </HeaderBox>

        {/* Problem Section */}
        <Box mb={20} id="problema">
          <Text 
            as="h2" 
            fontSize="3xl" 
            fontWeight="bold" 
            mb={12} 
            textAlign="center"
            bgGradient="linear(to-r, #4299e1, #9f7aea)"
            bgClip="text"
          >
            Desafios que sua empresa enfrenta hoje
          </Text>
          
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
            {[
              {
                icon: FaClock,
                title: "Custos Operacionais Elevados",
                description: "Processos manuais e repetitivos que consomem tempo e recursos valiosos da sua equipe"
              },
              {
                icon: FaPlug,
                title: "Sistemas Desconectados",
                description: "Dispersão de informações entre plataformas que não se comunicam, causando ineficiência"
              },
              {
                icon: FaChartLine,
                title: "Dificuldade de Escalar",
                description: "Crescimento limitado pela capacidade operacional e altos custos marginais"
              },
              {
                icon: FaUserClock,
                title: "Sobrecarga da Equipe",
                description: "Profissionais valiosos gastando tempo com tarefas operacionais em vez de estratégicas"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardHeader>
                  <HStack>
                    <Icon as={item.icon} color="blue.400" boxSize={6} />
                    <Text fontSize="xl" fontWeight="bold">{item.title}</Text>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <Text color="gray.300">{item.description}</Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Box>



        {/* Why Choose Us Section */}
        <Box mb={20} id="porque-escolher">
          <Text 
            as="h2" 
            fontSize="3xl" 
            fontWeight="bold" 
            mb={12} 
            textAlign="center"
            bgGradient="linear(to-r, #4299e1, #9f7aea)"
            bgClip="text"
          >
            Por que líderes de mercado escolhem a Yo Tech
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[
              {
                icon: FaRobot,
                title: "Automação Inteligente",
                benefit: "Reduza até 70% dos processos manuais",
                description: "Soluções de IA que aprendem e se adaptam ao seu negócio"
              },
              {
                icon: FaChartLine,
                title: "Crescimento Escalável",
                benefit: "Estrutura que cresce com você",
                description: "Da startup à grande empresa, nossa solução se adapta"
              },
              {
                icon: FaHandshake,
                title: "Parceria Estratégica",
                benefit: "Mais que fornecedor, um aliado",
                description: "Entendemos seu negócio para entregar resultados reais"
              },
              {
                icon: FaRocket,
                title: "Implementação Rápida",
                benefit: "Resultados em semanas, não meses",
                description: "Média de 21 dias do contrato à operação"
              },
              {
                icon: FaGlobeAmericas,
                title: "Visão de Mercado",
                benefit: "Experiência comprovada",
                description: "Soluções validadas em mais de 15 setores"
              },
              {
                icon: FaMoneyBillWave,
                title: "Custo-Benefício",
                benefit: "Planos a partir de R$ 497/mês",
                description: "ROI médio de 3x em 6 meses"
              }
            ].map((feature, index) => (
              <Box
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg="whiteAlpha.50"
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                <Icon as={feature.icon} boxSize={8} color="blue.400" mb={4} />
                <Text fontSize="xl" fontWeight="bold" mb={2}>{feature.title}</Text>
                <Text color="blue.300" fontWeight="medium" mb={3}>{feature.benefit}</Text>
                <Text color="gray.300" fontSize="sm">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Services Section */}
        <Box mb={20} id="servicos">
          <Text 
            as="h2" 
            fontSize="3xl" 
            fontWeight="bold" 
            mb={12} 
            textAlign="center"
            bgGradient="linear(to-r, #4299e1, #9f7aea)"
            bgClip="text"
          >
            Soluções que transformam operações em resultados
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[
              {
                icon: FaRobot,
                title: "Agentes de IA para Atendimento",
                one_liner: "Atendimento 24/7 que reduz custos em até 60%",
                bullets: [
                  "Respostas instantâneas em até 3 segundos",
                  "Integração com seus sistemas de CRM e ERP",
                  "Relatórios de desempenho em tempo real"
                ],
                cta: "Transforme seu atendimento",
                link: "/servicos/agentes-ia"
              },
              {
                icon: FaShoppingCart,
                title: "Automações de Vendas",
                one_liner: "Aumente conversões em até 35% com automação inteligente",
                bullets: [
                  "Qualificação automática de leads",
                  "Nutrição personalizada em escala",
                  "Métricas de desempenho em tempo real"
                ],
                cta: "Potencialize suas vendas",
                link: "/servicos/automacoes-vendas"
              },
              {
                icon: FaPlug,
                title: "Integrações Personalizadas",
                one_liner: "Conecte todos os seus sistemas em uma única plataforma",
                bullets: [
                  "Integração com +100 ferramentas",
                  "Automação de fluxos de trabalho",
                  "Redução de erros manuais"
                ],
                cta: "Integrar meus sistemas",
                link: "/servicos/integracao"
              },
              {
                icon: FaHeadset,
                title: "Suporte Inteligente",
                one_liner: "Atendimento proativo que antecipa necessidades",
                bullets: [
                  "Resolução automática de 80% dos chamados",
                  "Análise de satisfação em tempo real",
                  "Redução de custos com suporte"
                ],
                cta: "Melhorar suporte",
                link: "/servicos/suporte"
              },
              {
                icon: FaShieldAlt,
                title: "Segurança & Compliance",
                one_liner: "Proteção avançada para seus dados",
                bullets: [
                  "Conformidade com LGPD",
                  "Criptografia de ponta a ponta",
                  "Backup e recuperação automáticos"
                ],
                cta: "Proteger meus dados",
                link: "/servicos/seguranca"
              },
              {
                icon: FaBrain,
                title: "Machine Learning Avançado",
                one_liner: "Previsões precisas para decisões estratégicas",
                bullets: [
                  "Análise preditiva de dados",
                  "Recomendações personalizadas",
                  "Otimização de processos"
                ],
                cta: "Descobrir possibilidades",
                link: "/servicos/machine-learning"
              }
            ].map((service, index) => (
              <Box
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg="whiteAlpha.50"
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
                display="flex"
                flexDirection="column"
                height="100%"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                <Icon as={service.icon} boxSize={8} color="blue.400" mb={4} />
                <Text fontSize="xl" fontWeight="bold" mb={2}>{service.title}</Text>
                <Text color="blue.300" mb={4}>{service.one_liner}</Text>
                
                <VStack align="start" spacing={3} mb={6} flexGrow={1}>
                  {service.bullets.map((bullet, i) => (
                    <HStack key={i} spacing={2} align="flex-start">
                      <Icon as={FaCheck} color="green.400" boxSize={4} mt={1} flexShrink={0} />
                      <Text color="gray.300" fontSize="sm">{bullet}</Text>
                    </HStack>
                  ))}
                </VStack>
                
                <Button
                  as={motion(ChakraLink)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={service.link}
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  w="100%"
                  rightIcon={<Icon as={FaArrowRight} />}
                  mt="auto"
                >
                  {service.cta}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Results Section */}
        <Box bgGradient="linear(to-r, #1a202c, #2d3748)" py={20} mb={20} id="resultados">
          <Container maxW="container.lg">
            <Text 
              as="h2" 
              fontSize="3xl" 
              fontWeight="bold" 
              mb={12} 
              textAlign="center"
              bgGradient="linear(to-r, #4299e1, #9f7aea)"
              bgClip="text"
            >
              Resultados que Transformam Negócios
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">
              {[
                {
                  value: "+300%",
                  label: "Aumento de Eficiência",
                  description: "Média de ganho de produtividade em processos automatizados"
                },
                {
                  value: "Até 40%",
                  label: "Redução de Custos",
                  description: "Economia operacional com automação de processos"
                },
                {
                  value: "24/7",
                  label: "Disponibilidade",
                  description: "Atendimento ininterrupto aos seus clientes"
                }
              ].map((stat, index) => (
                <Box
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Text 
                    fontSize="5xl" 
                    fontWeight="bold" 
                    color="white" 
                    mb={2}
                    bgGradient="linear(to-r, #4299e1, #9f7aea)"
                    bgClip="text"
                  >
                    {stat.value}
                  </Text>
                  <Text 
                    fontSize="xl" 
                    fontWeight="bold" 
                    color="blue.300" 
                    mb={2}
                  >
                    {stat.label}
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    {stat.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            <Text 
              color="gray.400" 
              fontSize="xs" 
              textAlign="center" 
              mt={10}
              fontStyle="italic"
            >
              *Métricas baseadas em média de projetos realizados em 2024. Resultados podem variar conforme o cenário de cada negócio.
            </Text>
          </Container>
        </Box>

      </SectionContainer>
    </AboutSection>

    {/* Team Section */}
    <AboutSection>
      <SectionContainer>
            <Box textAlign="center" mb={12}>
              <SectionTitle 
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, #4299e1, #9f7aea)"
                bgClip="text"
              >
                Nossa Equipe de Especialistas
              </SectionTitle>
              <Text color="gray.300" mt={4} maxW="2xl" mx="auto">
                Conheça o time por trás da Yo Tech, dedicado a transformar seu negócio com inovação e tecnologia de ponta.
              </Text>
            </Box>

            <ResponsiveGrid>
              <Card
                as={motion.div}
                whileHover={{ 
                  y: -5,
                  boxShadow: 'lg'
                }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>Liderança & Negócios</CardHeader>
                <CardBody>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FaUsers} color="blue.400" />
                      Liderança e desenvolvimento de negócios
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaUsers} color="blue.400" />
                      Arquitetura técnica e integrações
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaUsers} color="blue.400" />
                      Operações e escalabilidade
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card
                as={motion.div}
                whileHover={{ 
                  y: -5,
                  boxShadow: 'lg'
                }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>Operações & Marketing</CardHeader>
                <CardBody>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={FaChartLine} color="blue.400" />
                      Gestão financeira e governança
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaChartBar} color="blue.400" />
                      Criação de conteúdo estratégico
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsGraphUp} color="blue.400" />
                      Performance em marketing digital
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
            </ResponsiveGrid>
          </SectionContainer>
        </AboutSection>
      </Box>
  )
}

export default About
