import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

const images = [
    {
        url: './imagens/astros1.png',
        title: 'Astro Studies',
        width: '34%',
        escolherTime: "Astro Studies",
    },
    {
        url: './imagens/astros2.png',
        title: 'Stellar Explorers',
        width: '33%',
        escolherTime: "Stellar Explorers",
    },
    {
        url: './imagens/astros3.png',
        title: 'Interspatial Support',
        width: '33%',
        escolherTime: "Interspatial Support",
    },
];

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

export default function StandarTeams(props) {
    const {setSelectTeam} = props;

    return ( 
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        onClick={() => setSelectTeam(image.escolherTime)}
                        key={image.title}
                        style={{
                            width: image.width,
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
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
    );
}

// import { Button } from '@mui/material';
// import './StandardTeams.css';

// const StandardTeams = (props) => {
//     // Destructuring
//     const { setSelectTeam } = props;

//     return (
//         <section className='times'>
//                 <div className='time__estudos'>
//                     <Button
//                         color='secondary'
//                         size='large'
//                         variant="outlined"
//                         onClick={() => setSelectTeam("Astro Studies")} >
//                         Desvende os segredos dos Cosmos
//                     </Button>

//                 </div>
//                 <div className='time__exploracao'>
//                     <Button
//                         color='secondary'
//                         size='large'
//                         variant="outlined"
//                         onClick={() => setSelectTeam("Stellar Explorers")} >
//                         Seja um explorador estelar
//                     </Button>

//                 </div>
//                 <div className='time__infraestrutura'>
//                     <Button
//                         color='secondary'
//                         size='large'
//                         variant="outlined"
//                         onClick={() => setSelectTeam("Galaxy Infrastructure")} >
//                         Molde galáxias e construa dysons
//                     </Button>

//                 </div>
//                 <div className='time__suporte'>
//                     <Button
//                         color='secondary'
//                         size='large'
//                         variant="outlined"
//                         onClick={() => setSelectTeam("Interspatial Support")} >
//                         Seja um semeador dos cosmos
//                     </Button>

//                 </div>
//         </section>
//     )
// }

// export default StandardTeams;