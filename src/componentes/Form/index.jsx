import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
    return (
        <section className="form">
            <form>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Planeta" placeholder="Digite seu planeta" />
                <TextField label="Habilidades" placeholder="Digite suas habilidades" />
                {/* Aqui terá checkbox mui de estudo e equipe de astros */}
            </form>
        </section>
    )
}

export default Form;
