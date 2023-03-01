import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { ChocolateList } from "../../components/ChocolateList/ChocolateList";

export function Home() {
    return (
        <Container maxWidth={false}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                }}
            >
                <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    padding= "50px"
                >
                    Welcome to our Chocolate Shop!
                </Typography>
            </Box>
            <ChocolateList />
        </Container>
    )
}