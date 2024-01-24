import { useState } from 'react';
import './TextField.css';
import MUITextField from '@mui/material/TextField';
    const TextField = (props) => {

    // Desestruturação do objeto
    const {error, required, label, multiline, lines} = props;
    // valor - valor atual
    // setValor - função cheia de mecanismo, no qual o react entende que deve renderizar o componente
    const [valor, setValor] = useState("Valor inicial");

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
