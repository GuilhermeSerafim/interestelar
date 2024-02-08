import BannerDumb from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import { useState } from 'react';
import Team from './componentes/Team';
import StandardTeams from './componentes/StandardTeams';
import RodapeDumb from './componentes/Rodape';

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


  // Precisei subir alguns estados para manipular em outras partes da aplicação
  const [astros, setAstros] = useState([]);
  const [bgSelectTeam, setBgSelectTeam] = useState("");
  const [selectTeam, setSelectTeam] = useState("");
  const [textoExpandido, setTextoExpandido] = useState(null);

  const adicionarAstro = (astro) => {
    setAstros([...astros, astro])
  }

  return (
    <div className="App">
      <BannerDumb />
      < StandardTeams
        textoExpandido={textoExpandido}
        setTextoExpandido={(texto) => setTextoExpandido(texto)}
        setBgSelectTeam={(bg) => setBgSelectTeam(bg)}
        setSelectTeam={(time) => setSelectTeam(time)}
      />
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
      <RodapeDumb />
    </div>
  );
}

export default App;
