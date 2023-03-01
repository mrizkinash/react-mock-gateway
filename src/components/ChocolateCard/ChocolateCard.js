import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Input from '@mui/material/Input';

// chocolate = { id: number, name: String, desc: String, image: String, price: number }
export function ChocolateCard({ chocolate }) {
    const { addItemToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity((state) => state + 1);
    }

    function handleDecrease() {
        setQuantity((state) => state - 1);
    }

    function handleAddToCart() {
        const toAdd = {
            ...chocolate,
            quantity,
        };

        addItemToCart(toAdd);

        setQuantity(1);
    }

    return (
        <Container
            sx={{
                height: "100%",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
            }}
            maxWidth={false}
        >
            <Card
                sx={{ 
                    height: "100%",
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <CardMedia
                    component="img" 
                    image={chocolate.image}    
                    alt={chocolate.name}
                    sx={{
                        maxWidth:"100%",
                        height:"300px",
                        alignSelf: "center",
                        objectFit: "cover",
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {chocolate.name}
                    </Typography>
                    <Typography>
                        {`Rp ${chocolate.price}`}
                    </Typography>
                    <Typography>
                        {chocolate.desc}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        alignSelf: "center",
                    }}
                >
                    <Button size="small" onClick={handleDecrease}>
                        <RemoveIcon />
                    </Button>
                    <Input 
                        inputProps={{ 
                            inputMode: 'numeric', 
                            pattern: '[0-9]*' 
                        }} 
                        readOnly={true}
                        value={quantity} 
                        sx={{
                            width:"10px"
                        }}
                    />
                    <Button size="small" onClick={handleIncrease}>
                        <AddIcon />
                    </Button>
                    <Button size="small" onClick={handleAddToCart}>
                        <AddShoppingCartIcon />
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}