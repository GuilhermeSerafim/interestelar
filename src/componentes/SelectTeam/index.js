import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./SelectTeam.css";

const SelectTeam = (props) => {
    // Desestruturação do objeto
    const { itens, value, onChange } = props;

    return (
            <FormControl fullWidth margin="dense" variant="standard" >
                <InputLabel id="teams-label">Escolha seu time</InputLabel>
                <Select
                    labelId="teams-label"
                    id="teams"
                    value={value}  // Aqui você deve fornecer o valor selecionado (pode ser um estado do componente pai)
                    label="Teams"
                    onChange={onChange}  // Aqui você deve fornecer a função de callback para lidar com as mudanças de seleção
                >
                    {itens.map((item, index) => (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    );
};

export default SelectTeam;
