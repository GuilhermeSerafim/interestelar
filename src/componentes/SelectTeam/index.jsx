import { Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import "./SelectTeam.css";

const SelectTeam = ({teamsNames, aoAlterado, selectTeam, required, bgSelectTeam}) => {

    return (
        <FormControl required={required} color="secondary" fullWidth margin="dense" variant="filled" >
            <InputLabel id="rotulo-times">{"Time"}</InputLabel>
            <Select
                labelId="rotulo-times"
                id="select-times"
                value={selectTeam}
                style={{backgroundColor:bgSelectTeam, borderRadius: '5px'}}
                label="Seletor de times"
                onChange={aoAlterado}
            >
                {/* Renderizando times no seletor com map (retorna nv arr) */}
                <MenuItem value=""></MenuItem>
                {teamsNames.map(time => (
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
