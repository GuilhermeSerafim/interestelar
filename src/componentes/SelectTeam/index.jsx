import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./SelectTeam.css";

const SelectTeam = (props) => {
    // Desestruturação do objeto
    const { itens, value, onChange, defaultValue } = props;
    const escolhaDoTime = !defaultValue ? "Escolha seu time" : defaultValue;
    return (
        <FormControl color="secondary" fullWidth margin="dense" variant="filled" >
            <InputLabel id="teams-label">{escolhaDoTime}</InputLabel>
            <Select
                labelId="teams-label"
                id="teams"
                value={value}  // Aqui você deve fornecer o valor selecionado (pode ser um estado do componente pai)
                label="Teams"
                onChange={onChange}  // Aqui você deve fornecer a função de callback para lidar com as mudanças de seleção
            >
                {/* Renderizando lista com map (retorna nv arr) */}
                {itens.map(item => (
                    // Tiramos o index, pois o React pode não renderizar e causar alguns bugs, por isso colocam os o proprio item
                    // Obs: mas geralmente colocamos o index, quando recebemos esse index do servidor back-end
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectTeam;
