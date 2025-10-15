import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 4em;
    background-color: #000000ff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;

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
`

const testoOpcoes = ['Home', 'Sobre', 'Competências']

export default function Header(){
    return(
        <HeaderContainer>
            <h1>Matheus Castro</h1>
            <Opcoes>
                {testoOpcoes.map((texto) =>(
                    <Opcao><p>{texto}</p></Opcao>
                ))}
            </Opcoes>
        </HeaderContainer>
    )
}