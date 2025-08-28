import { Box, Container, Flex, Text, Link, VStack, HStack, Divider, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerBg = useColorModeValue('gray.900', 'gray.900');
  const borderColor = useColorModeValue('gray.700', 'gray.700');
  const textColor = useColorModeValue('gray.400', 'gray.400');
  const hoverColor = useColorModeValue('brand.300', 'brand.200');

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/company/yotechnologies' },
    { icon: FaGithub, url: 'https://github.com/yotechnologies' },
    { icon: FaTwitter, url: 'https://twitter.com/yotechnologies' },
    { icon: FaFacebook, url: 'https://facebook.com/yotechnologies' },
    { icon: FaInstagram, url: 'https://instagram.com/yotechnologies' },
  ];

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', url: '#sobre' },
        { label: 'Serviços', url: '#servicos' },
        { label: 'Cases', url: '#cases' },
        { label: 'Blog', url: '/blog' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentação', url: '/docs' },
        { label: 'Tutoriais', url: '/tutoriais' },
        { label: 'API', url: '/api' },
        { label: 'Status', url: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', url: '/privacidade' },
        { label: 'Termos de Uso', url: '/termos' },
        { label: 'Cookies', url: '/cookies' },
      ],
    },
  ];

  return (
    <Box as="footer" bg={footerBg} color="white" pt={16} borderTop="1px solid" borderColor={borderColor}>
      <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          mb={12}
          gap={12}
        >
          {/* Logo and description */}
          <Box maxW={{ base: '100%', lg: '300px' }}>
            <Box
              as={RouterLink}
              to="/"
              display="flex"
              alignItems="center"
              fontWeight="bold"
              fontSize="xl"
              color="white"
              mb={4}
              _hover={{
                textDecoration: 'none',
                '& span': {
                  bgGradient: 'linear(to-r, #007bff, #6a11cb)', 
                  bgClip: 'text',
                },
              }}
            >
              <Box as="span" bgGradient="linear(to-r, #007bff, #6a11cb)" bgClip="text">
                Yo Technologies
              </Box>
            </Box>
            <Text color={textColor} mb={6}>
              Transformando negócios com soluções inovadoras em Inteligência Artificial e automação.
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  p={2}
                  color="gray.400"
                  _hover={{
                    color: hoverColor,
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s"
                  aria-label={social.url.split('//')[1].split('/')[1]}
                >
                  <Box as={social.icon} boxSize={5} />
                </Link>
              ))}
            </HStack>
          </Box>

          {/* Footer links */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 8, md: 16, lg: 24 }}
            flexWrap="wrap"
          >
            {footerLinks.map((column, index) => (
              <Box key={index}>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mb={4}
                  color="white"
                  _after={{
                    content: '""',
                    display: 'block',
                    width: '40px',
                    height: '3px',
                    bgGradient: 'linear(to-r, #007bff, #6a11cb)',
                    mt: 2,
                  }}
                >
                  {column.title}
                </Text>
                <VStack spacing={3} align="flex-start">
                  {column.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      as={RouterLink}
                      to={link.url}
                      color={textColor}
                      _hover={{
                        color: hoverColor,
                        textDecoration: 'none',
                      }}
                      transition="color 0.2s"
                    >
                      {link.label}
                    </Link>
                  ))}
                </VStack>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Divider borderColor="rgba(255, 255, 255, 0.1)" mb={6} />

        {/* Copyright and additional links */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          pb={8}
          gap={4}
        >
          <Text color={textColor} fontSize="sm">
            © {currentYear} Yo Technologies. Todos os direitos reservados.
          </Text>
          <HStack spacing={6}>
            <Link
              as={RouterLink}
              to="/politica-privacidade"
              color={textColor}
              fontSize="sm"
              _hover={{ color: hoverColor, textDecoration: 'none' }}
            >
              Política de Privacidade
            </Link>
            <Link
              as={RouterLink}
              to="/termos-servico"
              color={textColor}
              fontSize="sm"
              _hover={{ color: hoverColor, textDecoration: 'none' }}
            >
              Termos de Serviço
            </Link>
            <Link
              as={RouterLink}
              to="/contato"
              color={textColor}
              fontSize="sm"
              _hover={{ color: hoverColor, textDecoration: 'none' }}
            >
              Contato
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
