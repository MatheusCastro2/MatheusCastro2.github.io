import styled from "styled-components";
// Importando os ícones que vamos usar, incluindo YouTube
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaGithub, FaUsers, FaYoutube } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";

// --- Dados das Tecnologias ---
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
  padding: 80px 8%;
  background-color: #121212;
  color: #EAEAEA;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
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

const Blockquote = styled.p`
  font-size: 1.15rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  color: #BDBDBD;
  margin: 0 auto 4rem auto;
  line-height: 1.7;
  padding-left: 20px;
  border-left: 3px solid ${neonGreen}55;
  font-style: italic;
`;

const SectionBlock = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #FFFFFF;
  border-left: 4px solid ${neonGreen};
  padding-left: 15px;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 30px;
    color: #BDBDBD;
    font-size: 1.05rem;
    &:before {
      content: '✓';
      color: ${neonGreen};
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 1.2rem;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureCard = styled.div`
  background: #1c1c1c;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  flex: 1;
  border: 1px solid #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px ${neonGreen}55;
  }
`;

const CardIconWrapper = styled.div`
  font-size: 3rem;
  color: ${neonGreen};
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #EAEAEA;
  margin-bottom: 1.5rem;
`;

// --- NOVOS COMPONENTES PARA VIDEOS E LINKS ---

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const MediaColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

// Wrapper para tornar o iframe responsivo (mantendo proporção 16:9)
const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px ${neonGreen}33; // Brilho sutil permanente
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const LinkItem = styled.div`
    margin-bottom: 1rem;
`;

const NeonLink = styled.a`
  color: #EAEAEA;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: ${neonGreen};
    text-shadow: 0 0 5px ${neonGreen}, 0 0 15px ${neonGreen}88;
  }
`;

// --- (Componentes de Tecnologia permanecem os mesmos) ---
const TechnologiesSection = styled.div`
  background-color: #1c1c1c;
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid #333;
  margin-top: 4rem; // Adiciona espaço acima da seção de tecnologias
`;
const TechCategory = styled.div` margin-top: 1.5rem; `;
const SubTitle = styled.h3` font-size: 1.5rem; color: #EAEAEA; margin-top: 1.5rem; margin-bottom: 1rem; `;
const TechList = styled.ul` list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 15px; `;
const TechItem = styled.li` display: flex; align-items: center; gap: 8px; background-color: #333; color: #EAEAEA; padding: 10px 20px; border-radius: 25px; font-size: 1rem; border: 1px solid #444; transition: all 0.3s ease; &:hover { color: #121212; background-color: ${neonGreen}; border-color: ${neonGreen}; transform: translateY(-3px); box-shadow: 0 0 15px ${neonGreen}66; } `;
const TechIcon = styled.span` display: flex; align-items: center; font-size: 1.5rem; `;


export default function Projetos() {
  return (
    <ProjetosContainer>
      <ContentWrapper>
        <MainTitle>Projeto CESAS</MainTitle>
        <Blockquote center>
          Projeto acadêmico de remodelação do site para o CESAS (Centro Educacional SESAS), focado em criar uma experiência de usuário moderna, intuitiva e acessível para a comunidade.
        </Blockquote>

        <SectionBlock>
          <SectionTitle>Propósito</SectionTitle>
          <Blockquote>
            A plataforma foi criada para resolver desafios de comunicação e acesso à informação, servindo como uma ponte digital entre a escola e a comunidade...
          </Blockquote>
        </SectionBlock>

        <SectionBlock>
          <SectionTitle>Funcionalidades Principais</SectionTitle>
          <CardsContainer>
            <FeatureCard>
              <CardIconWrapper><FaUsers /></CardIconWrapper>
              <CardTitle>Para Visitantes e Alunos</CardTitle>
              <FeatureList>
                <li>Navegação Intuitiva</li>
                <li>Catálogo de Cursos</li>
                <li>Inscrição Descomplicada</li>
                <li>Design Responsivo</li>
              </FeatureList>
            </FeatureCard>
            <FeatureCard>
              <CardIconWrapper><MdDashboard /></CardIconWrapper>
              <CardTitle>Painel do Administrador</CardTitle>
              <FeatureList>
                <li>Painel de Controle Robusto</li>
                <li>Gerenciamento de Conteúdo</li>
                <li>Gestão de Alunos</li>
                <li>Exportação de Dados</li>
              </FeatureList>
            </FeatureCard>
          </CardsContainer>
        </SectionBlock>

        {/* --- NOVA SEÇÃO DE VÍDEOS E LINKS --- */}
        <SectionBlock>
            <SectionTitle>Vídeos e Repositórios</SectionTitle>
            <MediaGrid>
                {/* Coluna da Esquerda: Vídeos */}
                <MediaColumn>
                    <SubTitle>Demonstrações em Vídeo</SubTitle>
                    <VideoWrapper>
                        <StyledIframe 
                            src="https://www.youtube.com/embed/uz3IbURciFk" 
                            title="Demonstração do Painel do Aluno" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </StyledIframe>
                    </VideoWrapper>
                    <VideoWrapper>
                        <StyledIframe 
                            src="https://www.youtube.com/embed/BnKMGDLlmqA" 
                            title="Demonstração do Painel Administrativo" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </StyledIframe>
                    </VideoWrapper>
                </MediaColumn>

                {/* Coluna da Direita: Links */}
                <MediaColumn>
                    <SubTitle>Links para o Código</SubTitle>
                    <LinkItem>
                        <NeonLink href="https://github.com/MatheusCastro2/cesas-projeto--" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>Repositório Front-end</span>
                        </NeonLink>
                    </LinkItem>
                    <LinkItem>
                        <NeonLink href="https://github.com/iguin26/cesas_server" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>Repositório Back-end</span>
                        </NeonLink>
                    </LinkItem>
                    <SubTitle>Demonstrações no YouTube</SubTitle>
                    <LinkItem>
                        <NeonLink href="https://youtu.be/uz3IbURciFk" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                            <span>Vídeo - Painel do Aluno</span>
                        </NeonLink>
                    </LinkItem>
                    <LinkItem>
                        <NeonLink href="https://youtu.be/BnKMGDLlmqA" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                            <span>Vídeo - Painel Administrativo</span>
                        </NeonLink>
                    </LinkItem>
                </MediaColumn>
            </MediaGrid>
        </SectionBlock>

        <TechnologiesSection>
            <SectionTitle>Tecnologias Utilizadas</SectionTitle>
            <TechCategory>
                <SubTitle>Front-end</SubTitle>
                <TechList>{frontendTech.map(item => (<TechItem key={item.name}><TechIcon>{item.icon}</TechIcon><span>{item.name}</span></TechItem>))}</TechList>
            </TechCategory>
            <TechCategory>
                <SubTitle>Back-end</SubTitle>
                <TechList>{backendTech.map(item => (<TechItem key={item.name}><TechIcon>{item.icon}</TechIcon><span>{item.name}</span></TechItem>))}</TechList>
            </TechCategory>
            <TechCategory>
                <SubTitle>Design & Versionamento</SubTitle>
                <TechList>{designAndVersioning.map(item => (<TechItem key={item.name}><TechIcon>{item.icon}</TechIcon><span>{item.name}</span></TechItem>))}</TechList>
            </TechCategory>
        </TechnologiesSection>

      </ContentWrapper>
    </ProjetosContainer>
  )
}