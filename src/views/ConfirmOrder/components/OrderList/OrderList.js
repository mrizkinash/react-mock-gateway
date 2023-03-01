import { useCart } from "../../../../hooks/useCart";
import { CartItemCard } from "../CartItemCard/CartItemCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"

export function OrderList({ idrToUsd }) {
    const { cartItems, cartTotalPrice } = useCart();
    const usdTotal = cartTotalPrice * idrToUsd;
    
    return (
        <Container>
            <Typography variant="h6" textAlign="left" paddingLeft="25px" paddingY="25px">
                Your order:
            </Typography>

            <Stack spacing={1}>
                {cartItems.map((item) => (
                    <CartItemCard key={item.id} cartItem={item} />
                ))}
            </Stack>
            
            <Box
                sx={{
                    padding: '50px',
                }}
            >
                <Typography variant="h5">
                    Total : Rp {cartTotalPrice} / {usdTotal} USD
                </Typography>
            </Box>
        </Container>
    )
}