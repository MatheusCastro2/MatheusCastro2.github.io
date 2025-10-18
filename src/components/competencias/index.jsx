import React, { useState } from 'react' // Importamos useState para gerenciar o estado dos filtros
import styled from 'styled-components'

// Importe suas imagens de ícones
import bD from '../../images/banco-de-dados.svg'
import Dev from '../../images/dev.svg' // Pode ser um ícone geral para desenvolvimento
import FrontEndIcon from '../../images/ferramentas.svg' // Reutilizando ferramenta para front-end ou encontre um mais específico
import VersionamentoIcon from '../../images/git.svg' // Ícone para versionamento
import Ferramentas from '../../images/ferramentas.svg'
import Tela from '../../images/tela.svg'

// Definindo as cores neon
const neonGreen = '#00FF00'; // Um verde neon vibrante
const lightGray = '#EAEAEA';
const darkGray = '#333333';
const mediumGray = '#BDBDBD';
const cardBg = '#222222'; // Fundo dos cards

// Dados mock para as competências, adaptados ao layout da imagem
// Usei 'id' para facilitar a filtragem
const allCompetencies = [
    {
        id:'desenvolvimento',
        filter: 'Back-end',
        icon: Dev,
        title: 'Desenvolvimento Back-end',
        skills: ['Node.js', 'Python', 'APIs RESTful', 'Microsserviços'],
        description: 'Domínio na construção de APIs robustas e escaláveis, e lógica de negócios.'
    },

    {
        id: 'frontend',
        filter: 'Front-end',
        icon: Tela,
        title: 'Desenvolvimento Front-end',
        skills: ['React', 'JavaScript', 'HTML5', 'CSS', 'Styled Components'],
        description: 'Habilidade em criar interfaces de usuário intuitivas e responsivas com tecnologias modernas.'
    },

    {
        id: 'versionamento',
        filter: 'Versionamento de Código',
        icon: VersionamentoIcon,
        title: 'Versionamento de Código',
        skills: ['Git', 'GitHub', 'GitLab', 'Controle de Branchs'],
        description: 'Uso avançado de sistemas de controle de versão para colaboração e gestão de projetos.'
    },
    {
        id: 'bd',
        filter: 'Banco de Dados',
        icon: bD,
        title: 'Banco de Dados',
        skills: ['SQL', 'PostgreSQL', 'MongoDB'],
        description: 'Experiência em design, implementação e otimização de bancos de dados relacionais e NoSQL.'
  },
   {
     id: 'metodologias',
     filter: 'Metodologias',
     icon: Ferramentas, // Ícone de ferramenta genérico
     title: 'Metodologias Ágeis',
     skills: ['Scrum', 'Kanban'],
     description: 'Aplicação de frameworks ágeis para otimizar o fluxo de trabalho e entrega de valor.'
   }
];


// Extrai todos os filtros únicos dos dados, adiciona 'Todos' no início
const allFilters = ['Todos', ...new Set(allCompetencies.map(comp => comp.filter))];


// --- COMPONENTES ESTILIZADOS ---

const CompetenciasContainer = styled.section`
  padding: 80px 5%;
  color: ${lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TituloCompetencias = styled.h1`
  font-size: 3.5rem;
  color: #FFFFFF;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    width: 80px;
    height: 4px;
    background-color: ${neonGreen};
    border-radius: 2px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os botões quebrem linha */
  gap: 15px;
  margin-bottom: 40px;
  justify-content: center;
`

const FilterButton = styled.button`
  background-color: ${props => props.active ? neonGreen : darkGray};
  color: ${props => props.active ? '#121212' : lightGray};
  border: ${props => props.active ? `1px solid ${neonGreen}` : `1px solid ${darkGray}`};
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}22` : 'none'};

  &:hover {
    background-color: ${neonGreen};
    color: #121212;
    border-color: ${neonGreen};
    box-shadow: 0 0 15px ${neonGreen}, 0 0 30px ${neonGreen}33;
    transform: translateY(-2px);
  }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 300px min, ocupa o que puder */
  gap: 30px;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima do grid */
  justify-items: center; /* Centraliza os cards dentro das células do grid */
`

const CompetenceCard = styled.div`
  background-color: ${cardBg};
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  border: 1px solid ${darkGray};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 280px; /* Altura mínima para padronizar */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px ${neonGreen}44;
  }
`

const CardIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  filter: invert(100%) brightness(200%); /* Ícones brancos por padrão */
`

const CardTitle = styled.h3`
  color: ${lightGray};
  font-size: 1.8rem;
  margin-bottom: 10px;
`

const CardDescription = styled.p`
  color: ${mediumGray};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1; /* Para empurrar a barra de progresso para baixo se o texto variar */
`

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${darkGray};
  border-radius: 10px;
  height: 10px;
  margin-top: 15px;
  overflow: hidden;
  position: relative;
`

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background: linear-gradient(to right, ${neonGreen}55, ${neonGreen}); /* Gradiente neon */
  border-radius: 10px;
  transition: width 0.8s ease-out;
`

const PercentageText = styled.span`
  color: ${neonGreen};
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 5px;
  align-self: flex-end; /* Alinha a porcentagem à direita */
`

const SkillsTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`

const SkillTag = styled.span`
  background-color: ${darkGray};
  color: ${mediumGray};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid ${darkGray};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${neonGreen};
    color: #121212;
    border-color: ${neonGreen};
    box-shadow: 0 0 8px ${neonGreen}66;
  }
`

export default function Competencias() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredCompetencies = activeFilter === 'Todos'
    ? allCompetencies
    : allCompetencies.filter(comp => comp.filter === activeFilter);

  return (
    <CompetenciasContainer>
      <TituloCompetencias>Minhas Competências</TituloCompetencias>

      <FilterContainer>
        {allFilters.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>

      <CardsContainer>
        {filteredCompetencies.map(comp => (
          <CompetenceCard key={comp.id}>
            <CardIcon src={comp.icon} alt={comp.title} />
            <CardTitle>{comp.title}</CardTitle>
            <CardDescription>{comp.description}</CardDescription>
            
            <SkillsTagContainer>
              {comp.skills.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillsTagContainer>
          </CompetenceCard>
        ))}
      </CardsContainer>
    </CompetenciasContainer>
  )
}