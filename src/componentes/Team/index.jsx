import { Typography } from "@mui/material";
import "./Team.css";
// Primeiramente vou fazer conforme as instruções, depois vejo alguma forma de refatorar para componentes do Material UI
// Criando "dumb" component
const Team = (props) => {
    const {nome} = props;
    return (
        <section className="time">
            <h3 align="center">{nome}</h3>
        </section>
    )
}

export default Team;