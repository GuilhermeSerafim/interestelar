import { Avatar, Card, CardContent } from '@mui/material';
import './Astro.css';

const Astro = (props) => {

    // Destructuring
    const { imagem } = props;
    return (
        <div className='astro'>
            <div className='cabecalho'>
                <img
                    src='https://github.com/guilhermeserafim.png'
                    alt='imagem do astro'
                    // sx={{width: 100, height: 100}}
                />
            </div>
            <div className='rodape'>
                <h4>Guilherme Serafim</h4>
                <h5>Jovem Aprendiz</h5>
            </div>
        </div>
    )
}

export default Astro;