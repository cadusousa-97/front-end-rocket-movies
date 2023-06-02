import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
        <ButtonText title="Voltar"/>
      </header>

      <Form>

      <Avatar>
        <img 
          src="https://github.com/cadusousa-97.png" 
          alt="Foto do usuário" 
        />

        <label htmlFor="avatar">
        <FiCamera />
          <input
            id="avatar"
            type="file"
          />
        </label>
      </Avatar>

      <Input 
      placeholder="Nome"
      type="text"
      icon={FiUser}
      />

      <Input 
      placeholder="E-mail"
      type="text"
      icon={FiMail}
      />

      <Input 
      placeholder="Senha"
      type="password"
      icon={FiLock}
      />

      <Input 
      placeholder={"Nova senha"}
      type="password"
      icon={FiLock}
      />

      <Button title="Salvar"/>

      </Form>
    </Container>
  )
}