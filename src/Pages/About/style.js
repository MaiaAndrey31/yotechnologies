import {
  Box,
  Container,
  Flex,
  Heading,
  Text as ChakraText,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

export const AboutSection = styled(Box)`
  position: relative;
  overflow: hidden;
  margin-top: 3rem;
  padding-top: 2rem;
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

export const SubtitleText = styled(ChakraText)`
  color: #efefef;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

export const FeaturesGrid = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  gap: 2.5rem;

  & > * {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 1200px) {
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);

    & > * {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding: 0 1.5rem;
    grid-template-columns: 1fr;

    & > * {
      max-width: 400px;
      margin: 0 auto;
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
  text-align: center;
  margin-top: 5rem;
`

export const CtaButton = styled(Button)`
  font-size: 1rem;
  padding: 1rem 2rem;
`

export const DecorativeOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
`

export const TopLeftOrb = styled(DecorativeOrb)`
  top: 10%;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(0, 123, 255, 0.1) 0%,
    rgba(0, 123, 255, 0) 70%
  );
`

export const BottomRightOrb = styled(DecorativeOrb)`
  bottom: 10%;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(106, 17, 203, 0.1) 0%,
    rgba(106, 17, 203, 0) 70%
  );
`
