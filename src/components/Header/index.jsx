import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header(){
  return(
    <Container>
      
    <h1>RocketMovies</h1>
    <div>  
    <Input placeholder="Pesquisar pelo título"/>
    </div>
    <Profile>

        <div>
          <Link to="/profile"><strong>Carlos Eduardo</strong></Link>
          <button>Sair</button>
        </div>
        <img src="https://github.com/cadusousa-97.png" alt="Foto do usuário" />

    </Profile>
    </Container>
  )
}