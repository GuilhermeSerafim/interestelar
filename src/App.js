import { Button } from '@mui/material';
import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"
import { useState } from 'react';
import Team from './componentes/Team';

function App() {

  const exibicaoDosTimes = [
    {
      name: 'Astro Studies',
      primaryColor: '#0a3871',
      backgroundColor: '#abc7e9'
    },
    {
      name: 'Stellar Explorers',
      primaryColor: '#ffba05',
      backgroundColor: '#fff5d9'
    },
    {
      name: 'Interspatial Support',
      primaryColor: '#b13091',
      backgroundColor: '#b462a0'
    },
    {
      name: 'Galaxy Infrastructure',
      primaryColor: '#57c278',
      backgroundColor: '#d9f7e9'
    },
  ]


  // Subimos esse estado, por que teremos a opção de escolher time pelos botões (quando estivermos na sessão dos times)
  const [selectTeam, setSelectTeam] = useState("");

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
        onClick={() => setSelectTeam("Astro Studies")} >
        Desvende os segredos dos Cosmos
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setSelectTeam("Stellar Explorers")} >
        Seja um explorador estelar
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setSelectTeam("Galaxy Infrastructure")} >
        Molde galáxias e construa dysons
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setSelectTeam("Interspatial Support")} >
        Seja um semeador dos cosmos
      </Button>
      {/* Crie seus Astros */}
      <FormAstro
        teams={exibicaoDosTimes.map(team => team.name)}
        selectTeam={selectTeam}
        aoAlterado={e => setSelectTeam(e.target.value)}
        aoNovoAstroAdicionado={astro => adicionarAstro(astro)}
      />
      {/* Tem que ter key em uma lista, o REACT usa essa key */}
      {exibicaoDosTimes.map(team => <Team primaryColor={team.primaryColor} backgroundColor={team.backgroundColor} key={team.name} name={team.name} />)} 
    </div>
  );
}

export default App;
