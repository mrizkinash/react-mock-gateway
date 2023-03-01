import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const products = [
    {
        id: 1,
        name: "Coklat Bongkah",
        desc: "Coklat Bongkah",
        image: "/chocoimg/bongkah.jpg",
        price: 12000,
    },
    {
        id: 2,
        name: "Brownies",
        desc: "Kue Brownies",
        image: "/chocoimg/brownies.jpg",
        price: 20000,
    },
    {
        id: 3,
        name: "Kue Coklat",
        desc: "Kue Coklat",
        image: "/chocoimg/choco_1.jpg",
        price: 20000,
    },
    {
        id: 4,
        name: "Cookies",
        desc: "Cookies",
        image: "/chocoimg/cookie.jpg",
        price: 5000,
    },
    {
        id: 5,
        name: "Cupcake",
        desc: "Top cake",
        image: "/chocoimg/cupcake.jpg",
        price: 11000,
    },
    {
        id: 6,
        name: "Coklat Mini",
        desc: "These chocolings pack a punch!",
        image: "/chocoimg/drop.jpg",
        price: 10000,
    },
    {
        id: 7,
        name: "Es Krim",
        desc: "A classic",
        image: "/chocoimg/eskrim.jpg",
        price: 7000,
    },
    {
        id: 8,
        name: "Grand Choco",
        desc: "BIG LOVE",
        image: "/chocoimg/Grand_Chocolate.jpg",
        price: 30000,
    },
    {
        id: 9,
        name: "Heart Choco",
        desc: "(Not) Big Love",
        image: "/chocoimg/hati.jpg",
        price: 10000,
    },
    {
        id: 10,
        name: "Rainbow Choco",
        desc: "Taste the rainbow!",
        image: "/chocoimg/rainbow.jpg",
        price: 12000,
    },
    {
        id: 11,
        name: "Sosis Coklat",
        desc: "So nic(h)e",
        image: "/chocoimg/sosis.jpg",
        price: 6000,
    },
    {
        id: 12,
        name: "Roket Coklat",
        desc: "Reach for the skies!",
        image: "/chocoimg/chocorocket.jpg",
        price: 17000,
    },
]

export function ChocolateList() {
    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <ChocolateCard
                            chocolate={product}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}