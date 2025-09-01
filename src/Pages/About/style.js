import {
  Box,
  Container,
  Flex,
  Heading,
  Text as ChakraText,
  SimpleGrid,
  Button,
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  CardBody as ChakraCardBody,
  List as ChakraList,
  ListItem as ChakraListItem,
  ListIcon as ChakraListIcon,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

export const AboutSection = styled(Box)`
  position: relative;
  margin-top: 3rem;
  padding-top: 12rem;
`

export const SectionContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderBox = styled(Box)`
  text-align: center;
  margin-bottom: 5rem;
`

export const SectionTitle = styled(Heading)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const GradientText = styled.span`
  background: linear-gradient(to right, #007bff, #6a11cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`

export const Text = styled(ChakraText)`
  color: ${props => props.color || '#efefef'};
  max-width: ${props => props.maxW || '100%'};
  margin: ${props => props.m || '0'};
  line-height: 1.6;
  font-size: ${props => props.fontSize || '1rem'};
  text-align: ${props => props.textAlign || 'left'};
`

export const SubtitleText = styled(Text)`
  color: #efefef;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

export const FeaturesGrid = styled(Box)`
  width: 100%;
  max-width: 1400px;
  margin: 1rem auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  & > * {
    flex: 1 1 300px; /* Flex-grow, flex-shrink, flex-basis */
    max-width: 400px;
    min-width: 280px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
    
    & > * {
      flex: 1 1 45%;
      max-width: 45%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    
    & > * {
      flex: 1 1 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`

export const FeatureCardWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const CtaBox = styled(Box)`
  background: linear-gradient(135deg, rgba(49, 130, 206, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%);
  border: 1px solid rgba(66, 153, 225, 0.2);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 5rem auto 0;
  max-width: 800px;
  width: 100%;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(66, 153, 225, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%);
    z-index: -1;
    border-radius: 16px;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const CtaButton = styled(Button)`
  background: linear-gradient(90deg, #3182ce, #6b46c1);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: linear-gradient(90deg, #2c5282, #553c9a);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const DecorativeOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
`

export const TopLeftOrb = styled(DecorativeOrb)`
position: absolute;
  top: 10px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(0, 123, 255, 0.1) 100%,
    rgba(0, 123, 255, 0.6) 100%
  );
`

export const BottomRightOrb = styled(DecorativeOrb)`
  position: absolute;
  bottom: 10px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(106, 17, 203, 0.8) 100%,
    rgba(106, 17, 203, 0.8) 100%
  );
`

// New Components
export const StatBox = styled(Box)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

export const StatNumber = styled(Heading)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #3182ce, #6b46c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StatLabel = styled(ChakraText)`
  color: #a0aec0;
  font-size: 1rem;
  font-weight: 500;
`

export const SectionDivider = styled(Box)`
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.5), transparent);
  margin: 4rem 0;
  width: 80%;
  max-width: 800px;
`

// Card Components
export const Card = styled(ChakraCard)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(66, 153, 225, 0.5);
  }
`

export const CardHeader = styled(ChakraCardHeader)`
  font-size: 1.25rem;
  font-weight: 600;
  padding-bottom: 0.75rem;
  color: #4299e1;
`

export const CardBody = styled(ChakraCardBody)`
  padding: 1.5rem;
  color: #e2e8f0;
`

// List Components
export const List = styled(ChakraList)`
  color: #e2e8f0;
`

export const ListItem = styled(ChakraListItem)`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  color: #e2e8f0;
`

export const ListIcon = styled(ChakraListIcon)`
  color: #4299e1;
  margin-right: 0.75rem;
`

// Contact Info
export const ContactInfo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  color: #e2e8f0;
  font-size: 1.1rem;
`

export const ContactIcon = styled(Icon)`
  margin-right: 0.75rem;
  color: #4299e1;
`

// Responsive Adjustments
export const ResponsiveGrid = styled(Box)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  margin: 2rem 0;
`
