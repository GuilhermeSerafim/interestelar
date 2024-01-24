import { useState } from 'react';
import './TextField.css';
import MUITextField from '@mui/material/TextField';
const TextField = (props) => {

    // valor - valor atual
    // setValor - função cheia de mecanismo, no qual o react entende que deve renderizar o componente
    const [valor, setValor] = useState("Valor padrão");

    const aoDigitado = (e) => {
        console.log(valor);
        setValor(e.target.value);
    }

    return (
        <div className="campo-texto">
            <MUITextField
                onChange={aoDigitado}
                value={valor}
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
