import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CasesSection = styled(Box)`
  position: relative;
`

export const SectionContainer = styled(Container)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

export const SectionDescription = styled(Text)`
  color: #a0aec0;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

export const StatsGrid = styled(SimpleGrid)`
  margin-bottom: 2.5rem;
  gap: 2rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const CtaBox = styled(Box)`
  text-align: center;
  margin: 5rem 0;
`

export const CtaButton = styled(Button)`
  font-size: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #007bff 0%, #6a11cb 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }
`

export const CaseStudiesSection = styled(Box)`
  margin-top: 5rem;
`

export const CaseStudiesTitle = styled(Heading)`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #2d3748;
`

export const CaseStudiesGrid = styled(SimpleGrid)`
  gap: 2rem;

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const DecorativeOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
`

export const TopRightOrb = styled(DecorativeOrb)`
  top: 10%;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(0, 123, 255, 0.1) 0%,
    rgba(0, 123, 255, 0) 70%
  );
`

export const BottomLeftOrb = styled(DecorativeOrb)`
  bottom: 10%;
  left: -200px;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(106, 17, 203, 0.1) 0%,
    rgba(106, 17, 203, 0) 70%
  );
`
