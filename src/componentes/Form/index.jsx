import TextField from "../TextField";
import "./Form.css";

const Form = () => {
    return (
        <section className="formCriarAstros">
            <form>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField label="Nome" required />
                <TextField label="Planeta" required />
                <TextField label="Habilidades" />
                <TextField label="Endereço imagem" />
                {/* Aqui terá checkbox mui de estudo e equipe de astros */}
            </form>
        </section>
    )
}

export default Form;
