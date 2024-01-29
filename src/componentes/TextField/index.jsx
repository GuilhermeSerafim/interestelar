import './TextField.css';
import MUITextField from '@mui/material/TextField';
    const TextField = (props) => {

    // Desestruturação do objeto
    const {error, required, label, multiline, lines, value} = props;
    

    // Subi o hook para o formAstro
    return (
        <div className="campo-texto">
            <MUITextField
                onChange={"a"}
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
