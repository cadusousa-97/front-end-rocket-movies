import { Container } from './styles'

export function Button({ title, loading = false, children }) {

  return (
  <Container 
    type="button"
    disabled={loading}
  >
    {loading ? 'Carregando...' : title}
    {children}
  </Container>)
}