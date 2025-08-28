import { Box, Container, Flex, Heading, Text, VStack, Input, Textarea, Button, useToast, FormControl, FormLabel, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const ContactCard = ({ icon, title, description, href, isLink = false }) => {
  const content = (
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
        <Box as={icon} size={20} />
      </Box>
      <Heading as="h3" size="md" color="white">
        {title}
      </Heading>
      <Text color="gray.400" textAlign="center">
        {description}
      </Text>
    </VStack>
  );

  if (isLink) {
    return (
      <a href={href} style={{ width: '100%', textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
};
const Contact = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente mais tarde.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionPadding = useBreakpointValue({ base: '80px 0', md: '120px 0' });
  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const inputBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.50');
  const inputBorder = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200');
  const inputFocusBorder = useColorModeValue('brand.500', 'brand.300');

  return (
    <Box as="section" id="contato" py={sectionPadding} bg="rgba(13, 17, 23, 0.8)" position="relative" overflow="hidden">
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
            Contato
          </Text>
          <Heading as="h2" size={headingSize} mb={6} fontWeight="bold">
            Vamos conversar sobre o{' '}
            <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
              futuro do seu negócio com IA?
            </Box>
          </Heading>
          <Box maxW="3xl" mx="auto">
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400">
              Preencha o formulário e receba um diagnóstico gratuito de oportunidades com IA para sua empresa.
            </Text>
          </Box>
        </Box>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12}>
          {/* Contact Form */}
          <Box flex={1} as="form" onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel color="gray.300">Nome</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  bg={inputBg}
                  borderColor={inputBorder}
                  _hover={{ borderColor: inputFocusBorder }}
                  _focus={{
                    borderColor: inputFocusBorder,
                    boxShadow: `0 0 0 1px ${inputFocusBorder}`,
                  }}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  bg={inputBg}
                  borderColor={inputBorder}
                  _hover={{ borderColor: inputFocusBorder }}
                  _focus={{
                    borderColor: inputFocusBorder,
                    boxShadow: `0 0 0 1px ${inputFocusBorder}`,
                  }}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Mensagem</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={6}
                  bg={inputBg}
                  borderColor={inputBorder}
                  _hover={{ borderColor: inputFocusBorder }}
                  _focus={{
                    borderColor: inputFocusBorder,
                    boxShadow: `0 0 0 1px ${inputFocusBorder}`,
                  }}
                  size="lg"
                />
              </FormControl>

              <Button
                type="submit"
                size="lg"
                variant="primary"
                rightIcon={<FaPaperPlane />}
                isLoading={isSubmitting}
                loadingText="Enviando..."
                width="full"
                py={6}
                fontSize="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px -5px rgba(0, 123, 255, 0.4)',
                }}
                transition="all 0.3s"
              >
                Agende sua reunião agora
              </Button>
            </VStack>
          </Box>

          {/* Contact Info */}
          <Box w={{ base: '100%', lg: '400px' }}>
            <VStack spacing={6} align="stretch">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ContactCard
                  icon={FaMapMarkerAlt}
                  title="Endereço"
                  description="Av. Paulista, 1000, São Paulo - SP, 01310-100"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactCard
                  icon={FaPhoneAlt}
                  title="Telefone"
                  description="(11) 99999-9999"
                  href="tel:+5511999999999"
                  isLink={true}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ContactCard
                  icon={FaEnvelope}
                  title="E-mail"
                  description="contato@yotechnologies.com.br"
                  href="mailto:contato@yotechnologies.com.br"
                  isLink={true}
                />
              </motion.div>
            </VStack>
          </Box>
        </Flex>
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

export default Contact;
