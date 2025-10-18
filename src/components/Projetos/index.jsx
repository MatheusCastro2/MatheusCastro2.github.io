import styled from "styled-components";
// Importando os ícones que vamos usar da biblioteca react-icons
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { MdAdminPanelSettings } from "react-icons/md";

// --- Dados das Tecnologias (com ícones) ---
// Estrutura de objetos para associar nome e ícone
const frontendTech = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <TbBrandNextjs /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> }
];

const backendTech = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'AdminJS', icon: <MdAdminPanelSettings /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql /> }
];

const designAndVersioning = [
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> }
];


// --- COMPONENTES ESTILIZADOS ---

const neonGreen = '#00FF00';

const ProjetosContainer = styled.section`
  padding: 80px 5%;
  background-color: #000000ff; // Fundo escuro
  color: #EAEAEA;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 900px; // Limita a largura do conteúdo para melhor leitura
  width: 100%;
  text-align: left;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 2rem;
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
`;

const ProjectDescription = styled.p`
  font-size: 1.15rem;
  text-align: center;
  color: #BDBDBD;
  margin-bottom: 4rem;
  line-height: 1.7;
`;

const SectionBlock = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFFFFF;
  border-left: 4px solid ${neonGreen};
  padding-left: 15px;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #EAEAEA;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #BDBDBD;
  line-height: 1.8;
  padding-left: 10px; /* Alinhamento sutil */
`;

const FeatureList = styled.ul`
    list-style-type: none;
    padding-left: 10px;

    li {
        margin-bottom: 0.8rem;
        position: relative;
        padding-left: 25px;

        &:before {
            content: '✓';
            color: ${neonGreen};
            font-weight: bold;
            position: absolute;
            left: 0;
            top: 2px;
        }
    }
`;

const TechnologiesSection = styled.div`
  background-color: #222;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #333;
`;

const TechCategory = styled.div`
  margin-top: 1.5rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #333;
  color: #EAEAEA;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  border: 1px solid #444;
  transition: all 0.3s ease;

  &:hover {
    color: #121212;
    background-color: ${neonGreen};
    border-color: ${neonGreen};
    transform: translateY(-3px);
    box-shadow: 0 0 15px ${neonGreen}66;
  }
`;

const TechIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;


export default function Projetos() {
  return (
    <ProjetosContainer>
      <ContentWrapper>
        <MainTitle>Projeto CESAS</MainTitle>
        <ProjectDescription>
          Projeto acadêmico de remodelação do site para o CESAS (Centro Educacional SESAS), focado em criar uma experiência de usuário moderna, intuitiva e acessível para a comunidade.
        </ProjectDescription>

        <SectionBlock>
          <SectionTitle>Propósito</SectionTitle>
          <Paragraph>
            A plataforma foi criada para resolver desafios de comunicação e acesso à informação, servindo como uma ponte digital entre a escola e a comunidade. O foco principal foi a intuitividade, garantindo que estudantes de todos os níveis de habilidade digital pudessem navegar pelo site, encontrar informações sobre cursos e realizar suas matrículas de forma simples e direta. Também desenvolvemos uma área administrativa para que os coordenadores da escola tivessem controle sobre as informações dos alunos, a grade horária e pudessem gerar relatórios em .pdf e .csv.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionTitle>Funcionalidades Principais</SectionTitle>
          
          <SubTitle>Para Visitantes e Alunos</SubTitle>
          <FeatureList>
            <li>Navegação Intuitiva: Uma interface limpa e organizada para encontrar informações rapidamente.</li>
            <li>Catálogo de Cursos: Seção dedicada para explorar os cursos profissionalizantes oferecidos.</li>
            <li>Inscrição Descomplicada: Formulário de matrícula online, facilitando o primeiro passo para o estudante.</li>
            <li>Design Responsivo: Acesso e funcionalidade completa em qualquer dispositivo, seja celular ou computador.</li>
          </FeatureList>

          <SubTitle>Painel do Administrador</SubTitle>
          <FeatureList>
            <li>Painel de Controle Robusto: Construído com AdminJS, permite a gestão completa do site sem necessidade de código.</li>
            <li>Gerenciamento de Conteúdo: Administradores podem facilmente atualizar notícias, cursos e outras seções do site.</li>
            <li>Gestão de Alunos: Visualização e organização dos alunos inscritos através da plataforma.</li>
            <li>Exportação de Dados: Geração de relatórios em .csv e fichas de matrícula individuais em .pdf para os alunos cadastrados.</li>
          </FeatureList>
        </SectionBlock>

        <TechnologiesSection>
          <SectionTitle>Tecnologias Utilizadas</SectionTitle>
          
          <TechCategory>
            <SubTitle>Front-end</SubTitle>
            <TechList>
              {frontendTech.map((item) => (
                <TechItem key={item.name}>
                  <TechIcon>{item.icon}</TechIcon>
                  <span>{item.name}</span>
                </TechItem>
              ))}
            </TechList>
          </TechCategory>

          <TechCategory>
            <SubTitle>Back-end</SubTitle>
            <TechList>
              {backendTech.map((item) => (
                <TechItem key={item.name}>
                  <TechIcon>{item.icon}</TechIcon>
                  <span>{item.name}</span>
                </TechItem>
              ))}
            </TechList>
          </TechCategory>
          
          <TechCategory>
            <SubTitle>Design & Versionamento</SubTitle>
            <TechList>
              {designAndVersioning.map((item) => (
                <TechItem key={item.name}>
                  <TechIcon>{item.icon}</TechIcon>
                  <span>{item.name}</span>
                </TechItem>
              ))}
            </TechList>
          </TechCategory>
        </TechnologiesSection>

      </ContentWrapper>
    </ProjetosContainer>
  )
}