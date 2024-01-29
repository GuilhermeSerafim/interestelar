import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./SelectTeam.css";
import { useState } from "react";

const SelectTeam = (props) => {
    // Desestruturação do objeto
    const { teams } = props;

    const [estadoAtual, setEstadoAtual] = useState("");
    return (
        <FormControl color="secondary" fullWidth margin="dense" variant="filled" >
            <InputLabel id="rotulo-times">{"Rótulo para o controle de seleção"}</InputLabel>
            <Select
                labelId="rotulo-times"
                id="select-times"
                value={estadoAtual}
                label="Seletor de times"
                onChange={(valor) => setEstadoAtual(valor.target.value)}
            >
                {/* Renderizando times no seletor com map (retorna nv arr) */}
                {teams.map(time => (
                    // Tiramos o index, pois o React pode não renderizar e causar alguns bugs, por isso colocam os o proprio item
                    // Obs: mas geralmente colocamos o index, quando recebemos esse index do servidor back-end
                    <MenuItem key={time} value={time}>
                        {time}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectTeam;
