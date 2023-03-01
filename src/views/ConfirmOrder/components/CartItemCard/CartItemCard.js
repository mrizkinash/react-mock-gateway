import { useCart } from "../../../../hooks/useCart";
import { INCREASE_ITEM, DECREASE_ITEM } from "../../../../contexts/CartContext";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/material/Input';

// cartItem = { id: number, name: String, desc: String, image: String, price: number, quantity: price }
export function CartItemCard({ cartItem }) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItemQuantity(cartItem.id, INCREASE_ITEM);
    }

    function handleDecrease() {
        changeCartItemQuantity(cartItem.id, DECREASE_ITEM);
    }

    function handleRemove() {
        removeCartItem(cartItem.id);
    }

    const cartItemTotal = cartItem.price * cartItem.quantity;

    return (
        <Container maxWidth={false}>
            <Card
                sx={{
                    height: "250px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <CardMedia
                    component="img"
                    image={cartItem.image}
                    alt={cartItem.name}
                    sx={{
                        height: "100%",
                        maxWidth: "250px",
                        objectFit: "cover",
                    }}
                />
                <CardContent sx={{ flexDirection: "column" }}>
                    <Typography>
                        {cartItem.name}
                    </Typography>
                    <Typography>
                        {`Rp ${cartItemTotal}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleDecrease}>
                        <RemoveIcon />
                    </Button>
                    <Input 
                        inputProps={{ 
                            inputMode: 'numeric', 
                            pattern: '[0-9]*' 
                        }} 
                        readOnly={true}
                        value={cartItem.quantity} 
                        sx={{
                            width:"10px"
                        }}
                    />
                    <Button size="small" onClick={handleIncrease}>
                        <AddIcon />
                    </Button>
                    <Button size="small" onClick={handleRemove}>
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}