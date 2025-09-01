import { useState, lazy, Suspense } from 'react';
import { useToast, Box } from '@chakra-ui/react';
import { FaCheckCircle, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LetterGlitch = lazy(() => import('../../components/LetterGlitch'));
import {
  ContactSection,
  GlitchBackground,
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactTitle,
  ContactDescription,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  ContactInfo,
  ContactInfoIcon,
  ContactInfoText,
  ContactInfoLabel,
  ContactInfoLink,
  ContactForm,
  FormGroup,
  FormLabelStyled,
  InputStyled,
  TextareaStyled,
  SubmitButton,
  FormFooter
} from './style';

const Contact = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Solicitação enviada!',
        description: 'Nossa equipe entrará em contato para confirmar o agendamento.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        message: '' 
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const features = [
    { icon: FaCheckCircle, text: "Análise personalizada do seu negócio" },
    { icon: FaCheckCircle, text: "Estratégia de automação sob medida" },
    { icon: FaCheckCircle, text: "Projeção de ROI para sua empresa" },
    { icon: FaCheckCircle, text: "Sem compromisso, sem cobrança" }
  ];

  return (
    <ContactSection id="contato">
      <GlitchBackground>
        <Suspense fallback={null}>
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Suspense>
      </GlitchBackground>
      <ContactContainer maxW="container.xl" position="relative" zIndex={2}>
        <ContactGrid>
          <ContactContent>
            <ContactTitle>Pronto para transformar seu negócio com IA?</ContactTitle>
            <ContactDescription>
              Agende uma consultoria gratuita de 30 minutos com nossos especialistas e 
              descubra como podemos impulsionar seus resultados.
            </ContactDescription>
            
            <FeatureList>
              {features.map((item, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon as={item.icon} />
                  <FeatureText>{item.text}</FeatureText>
                </FeatureItem>
              ))}
            </FeatureList>
            
            <ContactInfo>
              <ContactInfoIcon as={FaWhatsapp} />
              <ContactInfoText>
                <ContactInfoLabel>Prefere falar agora?</ContactInfoLabel>
                <ContactInfoLink 
                  href="https://wa.me/5511999999999" 
                  isExternal
                >
                  (11) 99999-9999
                </ContactInfoLink>
              </ContactInfoText>
            </ContactInfo>
          </ContactContent>
          
          <ContactForm as="form" onSubmit={handleSubmit}>
            <FormGroup isRequired>
              <FormLabelStyled>Nome Completo</FormLabelStyled>
              <InputStyled 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome"
              />
            </FormGroup>
            
            <FormGroup isRequired>
              <FormLabelStyled>E-mail Corporativo</FormLabelStyled>
              <InputStyled 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
              />
            </FormGroup>
            
            <FormGroup isRequired>
              <FormLabelStyled>Telefone/WhatsApp</FormLabelStyled>
              <InputStyled 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
              />
            </FormGroup>
            
            <FormGroup isRequired>
              <FormLabelStyled>Empresa</FormLabelStyled>
              <InputStyled 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nome da empresa"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabelStyled>Como podemos ajudar? (opcional)</FormLabelStyled>
              <TextareaStyled 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-nos sobre seus desafios e objetivos..."
              />
            </FormGroup>
            
            <SubmitButton
              as={motion.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Agendar Consultoria Grátis'}
              {!isSubmitting && <FaArrowRight style={{ marginLeft: '8px' }} />}
            </SubmitButton>
            
            <FormFooter>
              Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros conosco.
            </FormFooter>
          </ContactForm>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;