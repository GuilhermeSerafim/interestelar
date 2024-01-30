import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./SelectTeam.css";

const SelectTeam = (props) => {
    // Desestruturação do objeto
    const { teams, aoAlterado, selectTeam } = props;
    let rotuloTime = selectTeam === "" ? "Escolha seu time" : "Você escolheu";
    
    return (
        <FormControl color="secondary" fullWidth margin="dense" variant="filled" >
            <InputLabel id="rotulo-times">{rotuloTime}</InputLabel>
            <Select
                labelId="rotulo-times"
                id="select-times"
                value={selectTeam}
                label="Seletor de times"
                onChange={aoAlterado}
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
