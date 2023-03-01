import { ChocolateCard } from "../ChocolateCard/ChocolateCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const products = [
    {
        id: 1,
        name: "Coklat Bongkah",
        desc: "Coklat Bongkah",
        image: process.env.PUBLIC_URL.concat("/chocoimg/bongkah.jpg"),
        price: 12000,
    },
    {
        id: 2,
        name: "Brownies",
        desc: "Kue Brownies",
        image: process.env.PUBLIC_URL.concat("/chocoimg/brownies.jpg"),
        price: 20000,
    },
    {
        id: 3,
        name: "Kue Coklat",
        desc: "Kue Coklat",
        image: process.env.PUBLIC_URL.concat("/chocoimg/choco_1.jpg"),
        price: 20000,
    },
    {
        id: 4,
        name: "Cookies",
        desc: "Cookies",
        image: process.env.PUBLIC_URL.concat("/chocoimg/cookie.jpg"),
        price: 5000,
    },
    {
        id: 5,
        name: "Cupcake",
        desc: "Top cake",
        image: process.env.PUBLIC_URL.concat("/chocoimg/cupcake.jpg"),
        price: 11000,
    },
    {
        id: 6,
        name: "Coklat Mini",
        desc: "These chocolings pack a punch!",
        image: process.env.PUBLIC_URL.concat("/chocoimg/drop.jpg"),
        price: 10000,
    },
    {
        id: 7,
        name: "Es Krim",
        desc: "A classic",
        image: process.env.PUBLIC_URL.concat("/chocoimg/eskrim.jpg"),
        price: 7000,
    },
    {
        id: 8,
        name: "Grand Choco",
        desc: "BIG LOVE",
        image: process.env.PUBLIC_URL.concat("/chocoimg/Grand_Chocolate.jpg"),
        price: 30000,
    },
    {
        id: 9,
        name: "Heart Choco",
        desc: "(Not) Big Love",
        image: process.env.PUBLIC_URL.concat("/chocoimg/hati.jpg"),
        price: 10000,
    },
    {
        id: 10,
        name: "Rainbow Choco",
        desc: "Taste the rainbow!",
        image: process.env.PUBLIC_URL.concat("/chocoimg/rainbow.jpg"),
        price: 12000,
    },
    {
        id: 11,
        name: "Sosis Coklat",
        desc: "So nic(h)e",
        image: process.env.PUBLIC_URL.concat("/chocoimg/sosis.jpg"),
        price: 6000,
    },
    {
        id: 12,
        name: "Roket Coklat",
        desc: "Reach for the skies!",
        image: process.env.PUBLIC_URL.concat("/chocoimg/chocorocket.jpg"),
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