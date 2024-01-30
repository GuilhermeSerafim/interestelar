import AstroCard from "../AstroCard";
import "./Team.css";
// Primeiramente vou fazer conforme as instruções, depois vejo alguma forma de refatorar para componentes do Material UI
// Criando "dumb" component
const Team = (props) => {
    const { name, primaryColor, backgroundColor, astros } = props;

    return (
        <section className="team" style={{ backgroundColor: backgroundColor }}> {/**2 chaves - 1 para incorporar js, e a 2 é sintaxe para objeto js */}
            <h3 align="center" style={{ borderColor: primaryColor }}>{name}</h3>
            <div className="astros">
                {astros.map(astro => <AstroCard nome={astro.nome} planeta={astro.planeta} imagem={astro.imagem} />)}
            </div>
        </section>
    )
}

export default Team;
