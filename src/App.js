import Banner from './componentes/Banner';
import TextField from './componentes/TextField';

function App() {
  return (
    <div className="App">
      {/* Componente React */}
      <Banner />      
      <TextField label="Nome" placeholder="Digite seu nome"/>
      <TextField label="Cargo" placeholder="Digite seu cargo"/>
      <TextField label="Imagem" placeholder="Digite seu imagem" />
    </div>
  );
}

export default App;
