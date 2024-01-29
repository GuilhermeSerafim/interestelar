import SelectTeam from "../SelectTeam";
import TextField from "../TextField";
import "./Form.css";
import BtCreateAstro from "../BtCreateAstro";
import { useState } from "react";

const FormAstro = () => {

    // Nossos times de
    const teams = [
        'Astro Studies', // Estudos
        'Stellar Explorers', // Exploração
        'Interspatial Support', // Suporte
        'Galaxy Infrastructure' // Infraestrutura 
    ]

    const [nome, setNome] = useState("");
    const [planeta, setPlaneta] = useState("");
    const [imagem, setImagem] = useState("");
    const [habilidade, setHabilidades] = useState("");

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Testando", nome, planeta, imagem, habilidade)
    }
    
    return (
        <section className="formCriarAstros">
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados e crie os seus Astros!</h1>
                <TextField value={nome} aoAlterado={valor => setNome(valor)} label="Nome" required />
                <TextField value={planeta} aoAlterado={valor => setPlaneta(valor)} label="Planeta" required />
                <TextField value={imagem} aoAlterado={valor => setImagem(valor)} label="Endereço da sua imagem" required />
                <TextField value={habilidade} aoAlterado={valor => setHabilidades(valor)} label="Habilidades" multiline lines="4" />
                <SelectTeam teams={teams}/>
                <BtCreateAstro>Criar Astro</BtCreateAstro>
            </form>
        </section>
    )
}

export default FormAstro;
