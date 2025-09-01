import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  useToast,
  FormControl,
  FormLabel,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { useState } from 'react';
import ContactCard from '../../components/ContactCard';
import LetterGlitch from '../../components/LetterGlitch';
import {
  sectionStyles,
  backgroundStyles,
  glitchStyles,
  containerStyles,
  headingStyles,
  gradientTextStyles,
  descriptionStyles,
  formControlStyles,
  inputStyles,
  textareaStyles,
  buttonStyles,
  contactCardStyles,
  contactIconStyles,
  contactHeadingStyles,
  contactTextStyles
} from './style';

const Contact = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch {
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

  const headingSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const inputBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.50');
  const inputBorder = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200');
  const inputFocusBorder = useColorModeValue('brand.500', 'brand.300');

  return (
    <Box {...sectionStyles}>
      <Box {...backgroundStyles}>
        <Box as={LetterGlitch} {...glitchStyles} />
      </Box>

      <Container {...containerStyles}>
        <Box textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading {...headingStyles(headingSize)}>
            Vamos conversar sobre o{' '}
            <Box as="span" {...gradientTextStyles}>
              futuro do seu negócio com IA?
            </Box>
          </Heading>
          <Box maxW="3xl" mx="auto">
            <Text {...descriptionStyles}>
              Preencha o formulário e receba um diagnóstico gratuito de
              oportunidades com IA para sua empresa.
            </Text>
          </Box>
        </Box>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12}>
          <Box flex={1} as="form" onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl {...formControlStyles}>
                <FormLabel color="gray.300">Nome</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  {...inputStyles(inputBg, inputBorder, inputFocusBorder)}
                />
              </FormControl>

              <FormControl {...formControlStyles}>
                <FormLabel color="gray.300">E-mail</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  autoComplete="email"
                  {...inputStyles(inputBg, inputBorder, inputFocusBorder)}
                />
              </FormControl>

              <FormControl {...formControlStyles}>
                <FormLabel color="gray.300">Mensagem</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  {...textareaStyles(inputBg, inputBorder, inputFocusBorder)}
                />
              </FormControl>

              <Button
                {...buttonStyles}
                rightIcon={<FaPaperPlane />}
                isLoading={isSubmitting}
                loadingText="Enviando..."
              >
                Enviar Mensagem
              </Button>
            </VStack>
          </Box>

          <VStack spacing={6} flexBasis="400px">
            <ContactCard
              icon={FaPhoneAlt}
              title="Telefone"
              description="+55 (11) 99999-9999"
              isLink={true}
              href="tel:+5511999999999"
            />
            <ContactCard
              icon={FaEnvelope}
              title="E-mail"
              description="contato@yotechnologies.com.br"
              isLink={true}
              href="mailto:contato@yotechnologies.com.br"
            />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;