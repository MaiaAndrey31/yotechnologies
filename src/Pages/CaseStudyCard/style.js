import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

export const CardWrapper = styled(motion.div)`
  height: 100%;
`

export const Card = styled(Box)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #007bff, #6a11cb);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 123, 255, 0.2);
  }
`

export const CardContent = styled(VStack)`
  align-items: flex-start;
  gap: 1.5rem;
`

export const Title = styled(Heading)`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`

export const Description = styled(Text)`
  color: #a0aec0;
`

export const ImpactSection = styled(Box)`
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const ImpactLabel = styled(Text)`
  font-weight: 500;
  color: #63b3ed;
  margin-bottom: 0.5rem;
`

export const ImpactText = styled(Text)`
  color: #a0aec0;
`

export const CtaText = styled(Text)`
  color: #e2e8f0;
  margin-top: 1rem;
`

export const ButtonContainer = styled(Box)`
  margin-top: 0.5rem;
`

export const StyledButton = styled(Button)`
  && {
    background-color: #3182ce;
    color: white;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s;

    &:hover {
      background-color: #2c5282;
    }
  }
`
