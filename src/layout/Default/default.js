import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import Container from "@mui/material/Container";

export function DefaultLayout() {
    return (
        <Container maxWidth={false} disableGutters>
            <Header />

            <Outlet />
        </Container>
    )
}