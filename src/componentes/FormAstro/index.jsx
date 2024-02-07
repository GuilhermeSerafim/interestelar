import SelectTeam from "../SelectTeam";
import TextField from "../TextField";
import "./Form.css";
import BtCreateAstro from "../BtCreateAstro";
import { useState } from "react";

const FormAstro = (props) => {
    // Destructuring
    const { selectTeam, aoAlterado, aoNovoAstroAdicionado, teamsNames, setSelectTeam, bgSelectTeam, setBgSelectTeam, setTextoExpandido } = props;

    const [nome, setNome] = useState("");
    const [planeta, setPlaneta] = useState("");
    const [imagem, setImagem] = useState("");
    const [habilidades, setHabilidades] = useState("");

    const aoSalvar = (e) => {
        e.preventDefault();
        aoNovoAstroAdicionado({
            nome,
            planeta,
            imagem,
            habilidades,
            team: selectTeam
        });
        setNome("");
        setPlaneta("");
        setImagem("");
        setHabilidades("");
        setSelectTeam("")
        setBgSelectTeam("");
        setTextoExpandido(null);
    }

    return (
        <section className="formCriarAstros">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField
                    value={nome}
                    aoAlterado={e => setNome(e)}
                    label="Nome"
                    required
                />
                <TextField
                    value={planeta}
                    aoAlterado={e => setPlaneta(e)}
                    label="Planeta"
                    required
                />
                <TextField
                    value={imagem}
                    aoAlterado={e => setImagem(e)}
                    label="Endereço da sua imagem"
                    required
                />
                <TextField
                    value={habilidades}
                    aoAlterado={e => setHabilidades(e)}
                    label="Habilidades"
                    multiline
                    lines="4"
                    required
                />
                <SelectTeam
                    selectTeam={selectTeam}
                    aoAlterado={aoAlterado} // Prop Drilling
                    bgSelectTeam={bgSelectTeam} // Prop Drilling
                    teamsNames={teamsNames}
                    required
                />
                <BtCreateAstro>Criar Astro</BtCreateAstro>
            </form>
        </section>
    )
}

export default FormAstro;
