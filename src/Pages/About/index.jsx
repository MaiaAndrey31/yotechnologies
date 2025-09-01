import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Grid,
  GridItem,
  useColorModeValue,
  useBreakpointValue,
  Button,
  Icon,
  chakra,
  VStack,
  HStack,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRobot, FaChartLine, FaHandshake, FaRocket, FaGlobeAmericas, FaMoneyBillWave, FaChartBar, FaUsers } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import FeatureCard from '../../components/FeatureCard'
import DecryptedText from '../../components/DecryptedText'
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
    <AboutSection id='sobre' >
      <SectionContainer>
        <HeaderBox>
          <SectionTitle as='h2' size={headingSize}>
            Do potencial da IA aos{' '}
            <GradientText>resultados que importam</GradientText>
          </SectionTitle>

          <Box mt={16}>
            <DecryptedText
              style={{
                color: '#efefef',
                maxWidth: '30rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              text='Na Yo, tornamos a Inteligência Artificial simples e acessível para o seu negócio.'
              animateOn='hover'
            />
          </Box>
        </HeaderBox>

        {/* Problem Section */}
        <Box mb={20}>
          <Text fontSize="2xl" fontWeight="bold" mb={6} color="white">
            🌐 O Problema que Resolvemos
          </Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} mb={12}>
            <Card>
              <CardHeader>Processos Manuais</CardHeader>
              <CardBody>
                Empresas perdem tempo e recursos em tarefas repetitivas que poderiam ser automatizadas.
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Falta de Integração</CardHeader>
              <CardBody>
                Sistemas desconectados geram retrabalho e aumentam a chance de erros operacionais.
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Pressão por Eficiência</CardHeader>
              <CardBody>
                A necessidade de reduzir custos e aumentar a produtividade nunca foi tão grande.
              </CardBody>
            </Card>
          </Grid>
        </Box>



        {/* Features Section */}
        <Box mb={20}>
          <Text fontSize="2xl" fontWeight="bold" mb={12} color="white" textAlign="center">
            Por que Escolher a Yo Tech?
          </Text>
          <FeaturesGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {features.map((feature, index) => (
              <FeatureCardWrapper
                key={feature.title}
                as={motion.div}
                variants={featureVariants(index)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </FeatureCardWrapper>
            ))}
          </FeaturesGrid>
        </Box>

        {/* Team Section */}
        <AboutSection>
          <SectionContainer>
            <HeaderBox>
              <SectionTitle 
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, #4299e1, #9f7aea)"
                bgClip="text"
              >
                Nossa Equipe <GradientText>Especializada</GradientText>
              </SectionTitle>
              <Text 
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
                mx="auto"
                fontSize="lg"
                mb={8}
                px={4}
                textAlign="center"
              >
                Contamos com um time multidisciplinar de especialistas dedicados a impulsionar o sucesso do seu negócio
              </Text>
            </HeaderBox>
            
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
                      <ListIcon as={FaUsers} />
                      Liderança e desenvolvimento de negócios
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaUsers} />
                      Arquitetura técnica e integrações
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaUsers} />
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
                      <ListIcon as={FaChartLine} />
                      Gestão financeira e governança
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaChartBar} />
                      Criação de conteúdo estratégico
                    </ListItem>
                    <ListItem>
                      <ListIcon as={BsGraphUp} />
                      Performance em marketing digital
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
            </ResponsiveGrid>
          </SectionContainer>
        </AboutSection>
      </SectionContainer>
    </AboutSection>
  )
}

export default About
