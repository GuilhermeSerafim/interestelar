import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"
import { useState } from 'react';
import Team from './componentes/Team';
import StandardTeams from './componentes/StandardTeams';
import Rodape from './componentes/Rodape';

function App() {

  const timesEstaticosIniciais = [
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
    }
  ]


  // Subimos esse estado, por que teremos a opção de escolher time pelos botões (quando estivermos na sessão dos times)
  const [selectTeam, setSelectTeam] = useState("");

  const [bgSelectTeam, setBgSelectTeam] = useState("");

  const [astros, setAstros] = useState([]);

  const [textoExpandido, setTextoExpandido] = useState(null);

  const adicionarAstro = (astro) => {
    setAstros([...astros, astro])
  }

  return (
    <div className="App">
      <Banner />
      {/* Conhecendo os times, possa ser que o usuário selecione um, antes de criar os astros */}
      < StandardTeams
        textoExpandido={textoExpandido}
        setTextoExpandido={(texto) => setTextoExpandido(texto)}
        setBgSelectTeam={(bg) => setBgSelectTeam(bg)}
        setSelectTeam={(time) => setSelectTeam(time)}
      />

      {/* Crie seus Astros */}
      <FormAstro
        aoAlterado={e => setSelectTeam(e.target.value)}
        teamsNames={timesEstaticosIniciais.map(team => team.name)}
        bgSelectTeam={bgSelectTeam}
        setBgSelectTeam={() => setBgSelectTeam()}
        selectTeam={selectTeam}
        setSelectTeam={() => setSelectTeam()}
        setTextoExpandido={() => setTextoExpandido()}
        aoNovoAstroAdicionado={astro => adicionarAstro(astro)}
      />
      {/* Tem que ter key em uma lista, o REACT usa essa key */}
      {/* Renderização de times */}
      {timesEstaticosIniciais
        // .filter(team => astros.some(astro => astro.team === team.name)) // Outra forma de exibir apenas os times que tem astros disponiveis
        .map(team => // Transformando CADA TIME em um componente '<Team/>' e pegando as cores estaticas
          <Team
            primaryColor={team.primaryColor}
            backgroundColor={team.backgroundColor}
            key={team.name}
            name={team.name}
            astrosFiltrados={astros.filter(astro => astro.team === team.name)} // O array 'astros' é filtrado para incluir os astros em seus respectivos times
          />)}
      <Rodape />
    </div>
  );
}

export default App;
