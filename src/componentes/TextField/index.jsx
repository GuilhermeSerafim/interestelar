import './TextField.css';
import MUITextField from '@mui/material/TextField';
    const TextField = ({error, required, label, multiline, lines, value, aoAlterado}) => {
    
    const aoDigitado = (e) => {
        aoAlterado(e.target.value);
    }

    return (
        <div className="campo-texto">
            <MUITextField
                onChange={aoDigitado}
                value={value}
                fullWidth
                id="outlined-basic"
                error={error}
                required={required}
                label={label}
                variant="outlined"
                color='secondary'
                margin='dense'
                style={{backgroundColor:"#fff"}}
                multiline={multiline}
                rows={lines}
            />
        </div>
    )
};

export default TextField;
