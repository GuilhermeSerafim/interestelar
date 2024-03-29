import './AstroCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Collapse } from '@mui/material';

function AstroCard({imagem, nome, planeta, primaryColor, habilidades}) {

    const [expandido, setExpandido] = useState(false);

    return (
        <Card style={{boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.20)", margin:"20px 30px"}} sx={{ maxWidth: 400, textAlign:"center" }}>
            <CardMedia
                sx={{ height: 280, width: 280 }}
                image={imagem}
                title={nome} 
            />
            <CardContent>
                <Typography style={{ color: primaryColor, fontWeight: '450'}} gutterBottom variant="h5" component="div">
                    {nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {planeta}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
                <Button
                    size="small"
                    color="secondary"
                    onClick={() => setExpandido(!expandido)}
                    aria-expanded={expandido}
                    aria-label="Mostrar mais"
                >
                    Mostrar mais
                </Button>
            </CardActions>
            <Collapse in={expandido} timeout="auto" unmountOnExit> {/*timeout - duração animação |  unmountOnExit desmonta comp do dom*/}
                <CardContent >
                    <Typography maxWidth={240} sx={{wordWrap: "break-word"}} paragraph>
                        {habilidades}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default AstroCard;