import SelectTeam from "../SelectTeam";
import TextField from "../TextField";
import "./Form.css";
import BtCreateAstro from "../BtCreateAstro";

const FormAstro = (props) => {
    // Desestruturação do objeto
    const { defaultValueSelect } = props;

    // Nossos times de
    const teams = [
        'Astro Studies', // Estudos
        'Stellar Explorers', // Exploração
        'Interspatial Support', // Suporte
        'Galaxy Infrastructure' // Infraestrutura 
    ]

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("a")
    }
    return (
        <section className="formCriarAstros">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField label="Nome" required />
                <TextField label="Planeta" required />
                <TextField label="Endereço da sua imagem" required />
                <TextField label="Habilidades" multiline lines="4" />
                <SelectTeam itens={teams} defaultValue={defaultValueSelect} />
                <BtCreateAstro>Criar Astro</BtCreateAstro>
            </form>
        </section>
    )
}

export default FormAstro;
