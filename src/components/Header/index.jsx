import { Box, Flex, Button, Container, Image, useDisclosure, useColorMode, IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { useState, useEffect } from 'react';
import { StickyHeader } from './style';

const NavLink = ({ children, to = '/', ...rest }) => (
  <Link
    as={RouterLink}
    to={to}
    px={4}
    py={2}
    rounded={'md'}
    color={'white'}
    _hover={{
      textDecoration: 'none',
      bg: 'rgba(255, 255, 255, 0.1)',
    }}
    {...rest}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <StickyHeader bg={scrolled ? 'rgba(13, 17, 23, 0.95)' : 'transparent'}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo */}
          <Flex alignItems="center">
            <Box
              as={RouterLink}
              to="/"
              display="flex"
              alignItems="center"
              fontWeight="bold"
              fontSize="xl"
              color="white"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Image src={logo} alt="Yo Technologies Logo" h="40px" />
            </Box>
          </Flex>

          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <NavLink to="#inicio">Início</NavLink>
            <NavLink to="#sobre">Sobre Nós</NavLink>
            <NavLink to="#servicos">Serviços</NavLink>
            <NavLink to="#cases">Cases</NavLink>
            <NavLink to="#contato">Contato</NavLink>
            
            <Button
              ml={4}
              variant="primary"
              size="md"
              as={RouterLink}
              to="#contato"
            >
              Fale Conosco
            </Button>
          </Flex>

          {/* Mobile menu button */}
          <Box display={{ base: 'flex', md: 'none' }}>
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              variant="ghost"
              color="white"
              onClick={onToggle}
              _hover={{
                bg: 'rgba(255, 255, 255, 0.1)',
              }}
            />
          </Box>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Box as="nav" display="flex" flexDirection="column" mt={4}>
              <NavLink to="#inicio" onClick={onToggle}>Início</NavLink>
              <NavLink to="#sobre" onClick={onToggle}>Sobre Nós</NavLink>
              <NavLink to="#servicos" onClick={onToggle}>Serviços</NavLink>
              <NavLink to="#cases" onClick={onToggle}>Cases</NavLink>
              <NavLink to="#contato" onClick={onToggle}>Contato</NavLink>
              <Button
                mt={4}
                variant="primary"
                size="md"
                as={RouterLink}
                to="#contato"
                onClick={onToggle}
              >
                Fale Conosco
              </Button>
            </Box>
          </Box>
        ) : null}
      </Container>
    </StickyHeader>
  );
};

export default Header;
