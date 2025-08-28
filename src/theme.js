import { extendTheme } from '@chakra-ui/react';
const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#cce0ff',
      200: '#99c2ff',
      300: '#66a3ff',
      400: '#3385ff',
      500: '#007bff', // Primary blue
      600: '#0062cc',
      700: '#004a99',
      800: '#003166',
      900: '#001933',
    },
    purple: {
      500: '#6a11cb', // Primary purple
    },
    dark: {
      900: '#0d1117', // Dark background
      800: '#161b22',
      700: '#21262d',
    },
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'dark.900',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 'tall',
        scrollBehavior: 'smooth',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        lineHeight: '1.2',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'dark.700',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'brand.500',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'brand.600',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        primary: {
          bgGradient: 'linear(to-r, brand.500, purple.500)',
          color: 'white',
          _hover: {
            bgGradient: 'linear(to-r, brand.600, purple.600)',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'rgba(0, 123, 255, 0.1)',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
});

export default theme;
