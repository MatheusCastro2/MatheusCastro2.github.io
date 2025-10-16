import linkediN from '../../images/linkedin.svg'
import githuB from '../../images/github.svg'
import styled from 'styled-components'
import ImagemIa from '../../images/imagemIA.png'

// Contêiner principal da seção Home
// Usa flexbox para distribuir o texto à esquerda e a imagem à direita.
const HomeContainer = styled.section`
  display: flex;
  align-items: center; /* Alinha os dois contêineres verticalmente */
  justify-content: space-between; /* Empurra o texto para a esquerda e a imagem para a direita */
  min-height: 80vh; /* Ocupa uma boa parte da tela na vertical */
  padding: 0 2%; /* Aumenta o espaçamento nas laterais */
  gap: 2rem; /* Adiciona um espaço entre o texto e a imagem */
`

// Contêiner para agrupar todo o conteúdo de texto e ícones
const TextContainer = styled.div`
  max-width: 55%; /* Um pouco mais de espaço para o texto */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha todo o conteúdo interno à esquerda */
`

// Estilos para os textos
const TituloFrase = styled.h2`
  color: #EAEAEA;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`

const TituloNome = styled.h1`
  color: #FFFFFF;
  font-size: 3.5rem;
  margin: 10px 0;
`

const Texto = styled.p`
  color: #BDBDBD;
  font-size: 1.15rem;
  text-align: left;
  line-height: 1.7;
`

// Contêiner para os ícones
const IconContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`

// Estilo para cada ícone
const Icon = styled.img`
  width: 38px;
  height: 38px;
  filter: invert(100%) brightness(200%);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.15);
    filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(80deg) brightness(100%) contrast(100%);
  }
`
// NOVO: Link estilizado para não ter decoração padrão
const IconLink = styled.a`
  text-decoration: none;
  border-radius: 50%; /* Faz o box-shadow do hover ter a mesma forma */
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
     /* NOVO: A sombra verde agora fica no link ao invés da imagem */
    box-shadow: 0 0 15px 5px rgba(0, 255, 0, 0.6),
                0 0 30px 10px rgba(0, 255, 0, 0.3);
  }
`

// NOVO: Contêiner para a imagem
const ImageContainer = styled.div`
  flex-shrink: 0; /* Impede que a imagem encolha */
`

// NOVO: Componente para a imagem de perfil circular e com brilho
const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%; /* Deixa a imagem perfeitamente redonda */
  object-fit: cover; /* Garante que a imagem preencha o círculo sem distorcer */
  border: 3px solid #06ca58ff; /* Borda verde sutil para combinar com o hover */

  /* EFEITO DE LUZ CONSTANTE */
  box-shadow: 0 0 20px 5px rgba(0, 200, 83, 0.5), /* Sombra verde principal */
              0 0 40px 15px rgba(0, 200, 83, 0.2); /* Brilho verde mais suave e espalhado */
`

export default function Home() {
  return (
    <HomeContainer>
      <TextContainer>
        <TituloFrase>Olá, eu sou</TituloFrase>
        <TituloNome>Matheus Nere de Castro</TituloNome>
        <Texto>
          Estudante de Ciência da Computação apaixonado por transformar desafios em soluções tecnológicas. Minha trajetória começou com a curiosidade em aprimorar o que já existia, e hoje meu foco está no desenvolvimento de software. Tenho grande interesse na arquitetura de APIs, bancos de dados e na aplicação de Inteligência Artificial para criar ferramentas inovadoras e eficientes.
        </Texto>
        <IconContainer>
          <IconLink href="https://www.linkedin.com/in/matheus-castro-03a26a269" target="_blank" rel="noopener noreferrer">
            <Icon src={linkediN} alt="Meu LinkedIn" />
          </IconLink>
          <IconLink href="https://github.com/MatheusCastro2" target="_blank" rel="noopener noreferrer">
            <Icon src={githuB} alt="Meu GitHub" />
          </IconLink>
        </IconContainer>
      </TextContainer>

      <ImageContainer>
        <ProfileImage src={ImagemIa} alt="Foto de Matheus Nere de Castro" />
      </ImageContainer>
    </HomeContainer>
  )
}