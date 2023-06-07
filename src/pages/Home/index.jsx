import { Container, Content } from './styles'
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi"
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'


export function Home() {

  return (
    <>
    <Header />
    <Container>
      <div>
      <h1>Meus Filmes</h1>
      <Link to="/createmovie">
      <Button>
      <FiPlus />
      Adicionar filme
      </Button>
      </Link>
      </div>
      <Content className='scroll'>
      
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      <Card title="Interestellar"
      rate={2}
      description="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."
      TitleTag="Ficção científica"/>
      </Content>
    </Container>
    </>
  )
}


