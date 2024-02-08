import { Button, FormControl } from "@mui/material";
import "./BtCreateAstro.css"

const BtCreateAstro = ({children}) => {

    return (
        <FormControl margin="normal">
            <Button
                type="submit"
                color='secondary'
                size='large'
                variant="contained">
                {children}
            </Button>
        </FormControl>
    )
}

export default BtCreateAstro;
