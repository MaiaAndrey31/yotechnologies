import { Link as ScrollLink } from 'react-scroll';
import {
  CardWrapper,
  Card,
  CardContent,
  Title,
  Description,
  ImpactSection,
  ImpactLabel,
  ImpactText,
  CtaText,
  ButtonContainer,
  StyledButton
} from './style';

const CaseStudyCard = ({ title, description, impact, index = 0 }) => {
  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <Card>
        <CardContent>
          <Title as="h3">{title}</Title>
          <Description>{description}</Description>
          
          <ImpactSection>
            <ImpactLabel>Impacto:</ImpactLabel>
            <ImpactText>{impact}</ImpactText>
          </ImpactSection>

          <CtaText>Quer o mesmo resultado? Fale com a gente.</CtaText>

          <ButtonContainer>
            <ScrollLink to="contato" smooth={true} duration={500} offset={-80}>
              <StyledButton size="sm">Fale com a gente</StyledButton>
            </ScrollLink>
          </ButtonContainer>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default CaseStudyCard;