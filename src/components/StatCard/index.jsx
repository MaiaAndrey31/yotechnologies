import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const StatCard = ({ icon: Icon, value, label, index = 0 }) => {
  return (
    <Box
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
          <Box as={Icon} size={24} />
        </Box>
        <Heading as="h3" size="2xl" fontWeight="bold" color="white">
          {value}
        </Heading>
        <Text color="gray.400" textAlign="center">
          {label}
        </Text>
      </VStack>
    </Box>
  );
};

export default StatCard;
