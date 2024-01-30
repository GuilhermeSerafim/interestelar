import { Button } from '@mui/material';
import './StandardTeams.css';

const StandardTeams = (props) => {
    // Destructuring
    const { selectTeam } = props;

    return (
        <>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => selectTeam("Astro Studies")} >
                Desvende os segredos dos Cosmos
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => selectTeam("Stellar Explorers")} >
                Seja um explorador estelar
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => selectTeam("Galaxy Infrastructure")} >
                Molde galáxias e construa dysons
            </Button>
            <Button
                color='secondary'
                size='large'
                variant="outlined"
                onClick={() => selectTeam("Interspatial Support")} >
                Seja um semeador dos cosmos
            </Button>
        </>
    )
}

export default StandardTeams;