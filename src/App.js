import { Button } from '@mui/material';
import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"
import { useState } from 'react';

function App() {
  // let escolhaDoTime = "";
  const [escolhaDoTime, setEscolhaDoTime] = useState("");
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
        onClick={() => setEscolhaDoTime("Astro Studies")} >
        Desvende os segredos dos Cosmos
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setEscolhaDoTime("Stellar Explorers")} >
        Seja um explorador estelar
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setEscolhaDoTime("Galaxy Infrastructure")} >
        Molde galáxias e construa dysons
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => setEscolhaDoTime("Interspatial Support")} >
        Seja um semeador dos cosmos
      </Button>
      {/* Crie seus Astros */}
      <FormAstro defaultValueSelect={escolhaDoTime} />
    </div>
  );
}

export default App;
