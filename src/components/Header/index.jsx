import { Container, Profile } from "./style";

export function Header(){
  return(
    <Container>
      <Profile>

        <div>
          <h1>RocketMovies</h1>
        </div>

        <input type="text" placeholder="Pesquisar pelo título"/>

        <div>
          <strong>Carlos Eduardo</strong>
          <button>Sair</button>
        </div>
        <img src="https://github.com/cadusousa-97.png" alt="Foto do usuário" />

      </Profile>
    </Container>
  )
}