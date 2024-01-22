import './TextField.css';

const TextField = (props) => {
    return (
        <div className="campo-texto">
            {/* Imprimindo prop direto no html */}
            <label>{props.label}</label>
            {/* Imprimindo prop como propriedade */}
            <input placeholder={props.placeholder}/>
        </div>
    )
};

export default TextField;
