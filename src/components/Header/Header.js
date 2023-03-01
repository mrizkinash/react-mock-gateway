import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Header() {
    const { cartQuantity } = useCart();

    return (
        <Container
            sx={{
                height: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "sticky",
                bgcolor: "#EFDECD",
                alignItems: "center",
                alignSelf: "flex-start",
                top: 0,
            }}
            maxWidth={false}
        >
            <NavLink to="/">
                <Button>
                    <HomeIcon sx={{ color:"brown" }}/>
                </Button>
            </NavLink>
            <Box
                sx={{
                    display: "inherit",
                    alignContent: "flex-end",
                }}
            >
                <NavLink to="/confirmOrder">
                    <Button sx={{ color:"brown" }}>
                        <ShoppingCartIcon />
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                    </Button>
                </NavLink>
            </Box>
        </Container>
    )
}