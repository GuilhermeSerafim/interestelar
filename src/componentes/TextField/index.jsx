import './TextField.css';

const TextField = (props) => {
    const placeholderModificada = `${props.placeholder}Testeeeeee`

    return (
        <div className="campo-texto">
            {/* Imprimindo prop direto no html */}
            <label>{props.label}</label>
            {/* Imprimindo prop como propriedade */}
            <input placeholder={placeholderModificada}/>
        </div>
    )
};

export default TextField;
