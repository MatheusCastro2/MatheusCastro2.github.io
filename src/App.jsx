import './App.css'
import Competencias from './components/competencias'
import Header from './components/Header'
import Home from './components/home'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'

function App() {
  return (
    
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="sobre">
        <Sobre />
      </section>
      <section id="projetos">
        <Projetos></Projetos>
      </section>
      <section id="competencias">
        <Competencias />
      </section>
    </>
  )
}

export default App