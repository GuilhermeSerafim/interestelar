import './AstroCard.css';

const Astro = (props) => {

    // Destructuring
    const { imagem, nome, planeta, primaryColor } = props;
    return (
        <div className='astro'>
            <div style={{backgroundColor:primaryColor, borderRadius:"10px 10px 0px 0px"}}>
                <img
                    src={imagem}
                    alt='imagem do astro'
                />
            </div>
            <div className='rodape'>
                <h4 style={{color:primaryColor}}>{nome}</h4>
                <h5 style={{color:"#000"}}>{planeta}</h5>
            </div>
        </div>
    )
}

export default Astro;