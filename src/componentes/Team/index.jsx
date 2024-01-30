import { Typography } from "@mui/material";
import "./Team.css";
// Primeiramente vou fazer conforme as instruções, depois vejo alguma forma de refatorar para componentes do Material UI
// Criando "dumb" component
const Team = (props) => {
    const {name, primaryColor, backgroundColor} = props;
    return (
        <section className="time" style={{backgroundColor: backgroundColor}}> {/**2 chaves - 1 para incorporar js, e a 2 é sintaxe para objeto js */}
            <h3 align="center" style={{borderColor: primaryColor}}>{name}</h3>
        </section>
    )
}

export default Team;