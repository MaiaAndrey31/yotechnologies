import { Flex, Text, Icon } from '@chakra-ui/react'
import {
  StyledCard,
  StyledIconBox,
  StyledHeading,
  flexContainerStyles,
  textStyles,
} from './style'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <Flex {...flexContainerStyles}>
        <StyledIconBox>
          <Icon as={icon} boxSize={8} />
        </StyledIconBox>
        <StyledHeading as='h3' size='xl'>
          {title}
        </StyledHeading>
        <Text {...textStyles}>{description}</Text>
      </Flex>
    </StyledCard>
  )
}

export default FeatureCard
