import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ContactCard = ({ icon, title, description, href, isLink = false }) => {
  const content = (
    <VStack
      spacing={2}
      p={6}
      bg="rgba(255, 255, 255, 0.03)"
      borderRadius="lg"
      border="1px groove"
      borderColor="rgba(255, 255, 255, 0.8)"
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

export default ContactCard;
