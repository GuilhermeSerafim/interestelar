import { Button } from '@mui/material';
import './StandardTeams.css';

const StandardTeams = (props) => {
    // Destructuring
    const { setSelectTeam } = props;

    return (
        <>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => setSelectTeam("Astro Studies")} >
                Desvende os segredos dos Cosmos
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => setSelectTeam("Stellar Explorers")} >
                Seja um explorador estelar
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => setSelectTeam("Galaxy Infrastructure")} >
                Molde galáxias e construa dysons
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => setSelectTeam("Interspatial Support")} >
                Seja um semeador dos cosmos
            </Button>
        </>
    )
}

export default StandardTeams;