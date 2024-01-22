import './Banner.css'

// Essa forma de criar uma constante e importar ela, é um estilo de código bastante utilizado nas empresas
// A arrow function tem um escopo léxico
const Banner = () => {
    // JSX - Como o React trabalha com a parte visual
    return (
        <header className="banner">
            <img src="./imagens/banner.png" alt="Banner do interestellar"/>
        </header>
    )
}

export default Banner;