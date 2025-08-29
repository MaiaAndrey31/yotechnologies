import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.03)"
      p={8}
      borderRadius="lg"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      _hover={{
        transform: 'translateY(-5px)',
        borderColor: 'brand.500',
        boxShadow: '0 10px 25px -5px rgba(0, 123, 255, 0.2)',
      }}
      transition="all 0.3s ease"
      height="100%"
    >
      <Flex direction="column" alignItems="center" textAlign="center" h="100%">
        <Box
          mb={6}
          p={4}
          bgGradient="linear(to-r, #007bff, #6a11cb)"
          color="white"
          borderRadius="full"
          boxSize="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={icon} boxSize={8} />
        </Box>
        <Heading as="h3" size="lg" mb={4} color="white">
          {title}
        </Heading>
        <Text color="gray.400">{description}</Text>
      </Flex>
    </Box>
  );
};

export default FeatureCard;
