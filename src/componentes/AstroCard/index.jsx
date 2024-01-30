import { Avatar, Card, CardContent } from '@mui/material';
import './AstroCard.css';

const Astro = (props) => {

    // Destructuring
    const { imagem, nome, planeta } = props;
    return (
        <div className='astro'>
            <div className='cabecalho'>
                <img
                    src={imagem}
                    alt='imagem do astro'
                />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{planeta}</h5>
            </div>
        </div>
    )
}

export default Astro;