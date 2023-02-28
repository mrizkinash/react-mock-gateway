import { NavLink } from "react-router-dom";
//import { useCart } from "../../hooks/useCart";
import Container from "@mui/material/Container";
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";

export function Header() {
    //const { cartQuantity } = useCart();

    return (
        <Container
            sx={{
                width: "100%",
                height: "50px",
                alignItems: "center",
            }}
        >
            <NavLink to="/">
                <Button>
                    <HomeIcon />
                </Button>
            </NavLink>
        </Container>
    )
}