import { Typography } from '@mui/material';
import './Rodape.css';

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='rodape__container'>
            <img src="./imagens/fundo.png" alt="imagem de fundo" className="rodape__imagem" />
            <img src='./imagens/logo.png' alt='logo' className='rodape__logo' />
            <img src='./imagens/fb.png' alt='Facebook' className='rodape__facebook' />
            <img src='./imagens/ig.png' alt='Instagram' className='rodape__instagram' />
            <img src='./imagens/tw.png' alt='Twitter' className='rodape__twitter' />
            <p>Desenvolvido por Guilherme</p>
            </div>
        </div>
    )
}

export default Rodape;