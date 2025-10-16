import styled from "styled-components"
import imagem from '../../images/imagemIA2.png' // Sua imagem Ghibli ou outra

// Contêiner principal da seção Sobre
// Usa flexbox para distribuir a imagem à esquerda e o texto à direita.
const SobreContainer = styled.section`
  display: flex;
  align-items: center; /* Alinha os dois contêineres verticalmente */
  justify-content: space-between; /* Empurra a imagem para a esquerda e o texto para a direita */
  min-height: 80vh; /* Ocupa uma boa parte da tela na vertical */
  padding: 0 8%; /* Espaçamento nas laterais */
  gap: 2rem; /* Espaço entre a imagem e o texto */
`

// Contêiner para a imagem (agora à esquerda)
const ImageContainer = styled.div`
  flex-shrink: 0; /* Impede que a imagem encolha */
`

// Componente para a imagem de perfil circular e com brilho
const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%; /* Deixa a imagem perfeitamente redonda */
  object-fit: cover; /* Garante que a imagem preencha o círculo sem distorcer */
  border: 3px solid #00C853; /* Borda verde sutil */

  /* EFEITO DE LUZ CONSTANTE */
  box-shadow: 0 0 20px 5px rgba(0, 200, 83, 0.5), /* Sombra verde principal */
              0 0 40px 15px rgba(0, 200, 83, 0.2); /* Brilho verde mais suave e espalhado */
`

// Contêiner para agrupar todo o conteúdo de texto (agora à direita)
const TextContainer = styled.div`
  max-width: 55%; /* Limita a largura do texto */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha todo o conteúdo interno à esquerda */
  text-align: left; /* Garante que o texto esteja alinhado à esquerda */
`

// Estilos para os textos
const TituloSobre = styled.h2`
  color: #EAEAEA; /* Cor branca/cinza claro */
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`

const TituloCargo = styled.h1`
  color: #FFFFFF; /* Cor branca para destaque */
  font-size: 3.5rem;
  margin: 10px 0;
`

const Texto = styled.p`
  color: #BDBDBD; /* Um tom de cinza para o parágrafo */
  font-size: 1.15rem; /* Fonte aumentada como na Home */
  line-height: 1.7; /* Melhora a legibilidade */
`

export default function Sobre() {
  return (
    <SobreContainer>
      {/* IMAGEM ESTILIZADA À ESQUERDA */}
      <ImageContainer>
        <ProfileImage src={imagem} alt="Ilustração do perfil" />
      </ImageContainer>

      {/* TEXTO À DIREITA */}
      <TextContainer>
        <TituloSobre>Sobre mim</TituloSobre>
        <TituloCargo>Desenvolvedor FullStack</TituloCargo>
        <Texto>
          Desenvolvedor Full-Stack em formação, cursando o 6º semestre de Ciência
          da Computação, com foco na construção de soluções web robustas e
          escaláveis. Possuo experiência na aplicação de metodologias ágeis (Scrum
          e Kanban) para otimizar o ciclo de desenvolvimento e garantir entregas de
          valor. Especialista em backend com Node.js e bancos de dados (MySQL,
          PostgreSQL), e proficiente na criação de interfaces com React. Busco uma
          oportunidade para aplicar minhas habilidades técnicas e colaborativas em
          projetos desafiadores, contribuindo ativamente para a inovação e o
          sucesso da equipe.
        </Texto>
      </TextContainer>
    </SobreContainer>
  )
}