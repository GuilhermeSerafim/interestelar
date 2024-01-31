import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"
import { useState } from 'react';
import Team from './componentes/Team';
import StandardTeams from './componentes/StandardTeams';

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
      backgroundColor: '#c082b1'
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
      <Banner />
      {/* Conhecendo os times, possa ser que o usuário selecione um, antes de criar os astros */}
      < StandardTeams setSelectTeam={(time) => setSelectTeam(time)} />

      {/* Crie seus Astros */}
      <FormAstro
        teamsNames={exibicaoDosTimes.map(team => team.name)}
        selectTeam={selectTeam}
        aoAlterado={e => setSelectTeam(e.target.value)}
        aoNovoAstroAdicionado={astro => adicionarAstro(astro)}
      />
      {/* Tem que ter key em uma lista, o REACT usa essa key */}
      {exibicaoDosTimes.map(team =>
        <Team
          primaryColor={team.primaryColor}
          backgroundColor={team.backgroundColor}
          key={team.name}
          name={team.name}
          astros={astros.filter(astro => astro.team === team.name)} // Filtro de Astros
        />)}
    </div>
  );
}

export default App;
