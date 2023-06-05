import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function CreateMovie() {
  return(
    <>
    <Header />
    <Container>
      <a href="#"> <FiArrowLeft /> Voltar</a>
      <h1> Novo Filme</h1>
      <Form>
      <div>
      <Input placeholder="Título"/>
      <Input placeholder="Sua nota (de 0 a 5)"/>
      </div>
      <textarea name="Observações" placeholder="Observações" cols="80" rows="10"></textarea>
      </Form>

    <h3>Marcadores</h3>
    </Container>
    </>
  )
}