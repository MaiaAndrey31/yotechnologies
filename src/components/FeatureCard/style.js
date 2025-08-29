import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const StyledCard = styled(Box)`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    border-color: #007bff;
    box-shadow: 0 15px 30px -10px rgba(0, 123, 255, 0.25);
    background: rgba(255, 255, 255, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #007bff, #6a11cb);
    opacity: 0.8;
  }
`

export const StyledIconBox = styled(Box)`
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #007bff, #6a11cb);
  color: white;
  border-radius: 1rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  transform: translateY(0);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
  }
`

export const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;
  color: white;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.025em;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: #007bff;
    border-radius: 9999px;
  }
`

export const cardStyles = {
  bg: 'rgba(255, 255, 255, 0.03)',
  p: 8,
  w: '100%',
  maxW: '350px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 'xl',
  border: '1px solid',
  borderColor: 'rgba(255, 255, 255, 0.08)',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  position: 'relative',
  overflow: 'hidden',
}

export const iconBoxStyles = {
  mb: 6,
  p: 5,
  bgGradient: 'linear(135deg, #007bff, #6a11cb)',
  color: 'white',
  borderRadius: 'xl',
  boxSize: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
  transform: 'translateY(0)',
  transition: 'all 0.3s ease',
}

export const flexContainerStyles = {
  direction: 'column',
  alignItems: 'center',
  textAlign: 'center',
  h: '100%',
  w: '100%',
  gap: 4,
  justifyContent: 'space-between',
}

export const headingStyles = {
  as: 'h3',
  size: 'xl',
  mb: 4,
  color: 'white',
  fontWeight: 'semibold',
  lineHeight: 'tall',
  letterSpacing: 'wide',
  position: 'relative',
  pb: 2,
}

export const textStyles = {
  color: 'gray.300',
  fontSize: 'md',
  lineHeight: 'tall',
  opacity: 0.9,
  mt: 2,
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}
