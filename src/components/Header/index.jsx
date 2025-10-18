import styled from "styled-components"


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.0em 4em;
    background-color: #000000ff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;

    h1 {
        font-size: 2em;
        color: #ffffffff;
    }
`

const Opcoes = styled.ul`
    display: flex;
    gap: 20px;
`
const Opcao = styled.li`
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    border-radius: 5px;
    list-style: none;

    &:hover {
        transform: scale(1.05);
        text-shadow: 
            0 0 5px rgba(0, 255, 55, 0.5),
            0 0 10px rgba(0, 255, 55, 0.5),
            0 0 15px rgba(0, 255, 55, 0.5);
    }

    /* Estilo para a tag de âncora dentro do <li> */
    a {
        text-decoration: none;
        color: #ffffffff; /* Garante que a cor seja a que você quer */
    }
`


const textoOpcoes = [
    { texto: 'Home', id: 'home' },
    { texto: 'Sobre', id: 'sobre' },
    { texto: 'Projetos', id: 'projetos' },
    { texto: 'Competências', id: 'competencias' },
];

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Matheus Castro</h1>
            <Opcoes>
                {textoOpcoes.map((item) => (
                    <Opcao key={item.id}>
                        <a href={`#${item.id}`}>{item.texto}</a>
                    </Opcao>
                ))}
            </Opcoes>
        </HeaderContainer>
    )
}