import SelectTeam from "../SelectTeam";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {

    // Nossos times de
    const teams = [
        'Astro Studies', // Estudos
        'Stellar Explorers', // Exploração
        'Interspatial Support', // Suporte
        'Galaxy Infrastructure' // Infraestrutura 
    ]

    return (
        <section className="formCriarAstros">
            <form>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField label="Nome" required />
                <TextField label="Planeta" required />
                <TextField label="Filme ou série" />
                <TextField label="Endereço da sua imagem" />
                <TextField label="Habilidades" multiline lines="4"/>
                <SelectTeam itens={teams} />
            </form>
        </section>
    )
}

export default Form;
