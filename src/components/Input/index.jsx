import { Container, IconContainer, StyledInput } from "./styles"

export function Input({ icon, ...rest }) {
  return(
    <Container>
      {icon && <IconContainer>{icon}</IconContainer> }
      <StyledInput hasIcon={icon ? 1 : 0} {...rest} />
    </Container>
  )
}