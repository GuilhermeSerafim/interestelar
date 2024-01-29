import { Button } from '@mui/material';
import Banner from './componentes/Banner';
import FormAstro from './componentes/FormAstro';
import "./styles.css"

function App() {

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
        onClick={() => console.log("Astro Studies")} >
        Desvende os segredos dos Cosmos
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => console.log("Stellar Explorers")} >
        Seja um explorador estelar
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => console.log("Galaxy Infrastructure")} >
        Molde galáxias e construa dysons
      </Button>
      <Button
        color='secondary'
        size='large'
        variant="outlined"
        onClick={() => console.log("Interspatial Support")} >
        Seja um semeador dos cosmos
      </Button>
      {/* Crie seus Astros */}
      <FormAstro />
    </div>
  );
}

export default App;
