import './TextField.css';
import MUITextField from '@mui/material/TextField';
const TextField = (props) => {
    return (
        <div className="campo-texto">
            <MUITextField
                fullWidth
                id="outlined-basic"
                error={props.error}
                required={props.required}
                label={props.label}
                variant="outlined"
                color='secondary'
                margin='dense'
                style={{backgroundColor:"#fff"}}
                multiline={props.multiline}
                rows={props.lines}
            />
        </div>
    )
};

export default TextField;
