import { Button } from '@mui/material';
import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"
import { useState } from 'react';
import Team from './componentes/Team';

function App() {

  const exibicaoDosTimes = [
    {
      nome: 'Astro Studies',
      corPrimaria: '#0a3871',
      corSecundaria: '#abc7e9'
    },
    {
      nome: 'Stellar Explorers',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Interspatial Support',
      corPrimaria: '#b13091',
      corSecundaria: '#b462a0'
    },
    {
      nome: 'Galaxy Infrastructure',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
  ]


  // Subimos esse estado, por que teremos a opção de escolher time (quando estivermos na sessão dos times)
  const [time, setTime] = useState("");

  const [astros, setAstros] = useState([]);

  const adicionarAstro = (astro) => {
    console.log([...astros, astro]);
    setAstros([...astros, astro])
  }

  return (
    <div className="App">
      {/* Componente React */}
      <Banner />
      {/* Quem Somos */}
      {/* Conheça os times */}
      {/* Crie e monte seus times 
        Aqui terá a exibição dos times, com um botão de "escolher esse time" que leva um default value pro select de escolher times
      */}
      {/* Não está funcionando por enquanto | Criar um componente apenas para isso */}
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setTime("Astro Studies")} >
        Desvende os segredos dos Cosmos
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setTime("Stellar Explorers")} >
        Seja um explorador estelar
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setTime("Galaxy Infrastructure")} >
        Molde galáxias e construa dysons
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setTime("Interspatial Support")} >
        Seja um semeador dos cosmos
      </Button>
      {/* Crie seus Astros */}
      <FormAstro
        time={time}
        aoAlterado={e => setTime(e.target.value)}
        aoNovoAstroAdicionado={astro => adicionarAstro(astro)}
      />
      <Team nome="Nome estático"/>
      <Team nome="Nome estático 2"/>
    </div>
  );
}

export default App;
