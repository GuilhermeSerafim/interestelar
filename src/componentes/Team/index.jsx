import AstroCard from "../AstroCard";
import "./Team.css";
// Primeiramente vou fazer conforme as instruções, depois vejo alguma forma de refatorar para componentes do Material UI
// Criando "dumb" component
const Team = ({name, primaryColor, backgroundColor, astrosFiltrados}) => {
    
    return (
        astrosFiltrados.length > 0 ? <section className="team" style={{ backgroundColor: backgroundColor }}> {/**2 chaves - 1 para incorporar js, e a 2 é sintaxe para objeto js */}
            <h3 align="center" style={{ borderColor: primaryColor }}>{name}</h3>
            <div className="astros">
                {astrosFiltrados.map(astro => <AstroCard
                    key={astro.nome}
                    nome={astro.nome}
                    planeta={astro.planeta}
                    imagem={astro.imagem}
                    habilidades={astro.habilidades}
                    primaryColor={primaryColor}
                />)}
            </div>
        </section>
            : "" /** Fazer um componente padrão para o vazio, em vez de "" (desafio) */
    )
}

export default Team;
