import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Typography } from '@mui/material/'; // Estudar mais afundo esses componentes
import './StandardTeams.css'


const images = [
    {
        url: './imagens/astros1.png',
        title: 'Astro Studies',
        width: '34%',
        escolherTime: "Astro Studies",
        text: "Exploram os mistérios do cosmos com telescópios quânticos e sondas intergalácticas, buscando desvendar enigmas como a matéria escura, branca e as estrela de hawking.",
        color: "#0a3871",
        backgroundColor: "rgba(10, 56, 113, 0.5)"
    },
    {
        url: './imagens/astros2.png',
        title: 'Stellar Explorers',
        width: '33%',
        escolherTime: "Stellar Explorers",
        text: "Navegam pelo espaço em busca de novos mundos e civilizações, desafiando os limites da física com naves movidas a energia estelar e propulsão hiperdimensional.",
        color: "#ffba05",
        backgroundColor: "#e5a704 "
    },
    {
        url: './imagens/astros3.png',
        title: 'Interspatial Support',
        width: '33%',
        escolherTime: "Interspatial Support",
        text: "Guardiões do universo, constroem megaestruturas intergalácticas como a Esfera de Dyson, colhendo energia estelar e dando suporte a seres em exoplanetas, para equilibrar o cosmos.",
        color: "#b13091",
        backgroundColor: "rgba(177, 48, 145, 0.5)"
    },
];

// Criando componente personalizado com styled
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: 100, // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));
// Preciso deixar responsivo
function StandardTeams(props) {
    // Inserir estados no select do formulário
    const { setSelectTeam, setBgSelectTeam, textoExpandido, setTextoExpandido } = props;
    // Controlação dos textos expandidos

    return (
        <>
            <Typography
            fontFamily={'inherit'}
                variant='h3'
                style={{ backgroundColor: "#71009a", color: "#fff", fontWeight: "300", padding: "20px" }}
            >
                Conheça os times
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        onClick={() => {
                            setSelectTeam(image.escolherTime);
                            setBgSelectTeam(image.backgroundColor);
                            setTextoExpandido(image.text);
                        }}
                        key={image.title}
                        style={{
                            width: image.width,
                            boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.20)",
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    fontWeight: 500,
                                    fontSize: "1.5em"
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                        {textoExpandido === image.text && (
                            <Typography
                                className='subtitulo'
                                color="#FFF"
                                variant="subtitle1"
                                sx={{
                                    position: 'absolute',
                                    minWidth: image.width,
                                    fontWeight: 400,
                                    maxWidth: 300,
                                    bottom: -170,
                                    p: 4,
                                    pt: 2,
                                    backgroundColor: image.backgroundColor,
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                }}
                            >
                                {image.text}
                            </Typography>

                        )}
                    </ImageButton>
                ))}
            </Box>
        </>
    );
}

export default StandardTeams;
