import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/Default/default";
import { Home } from "./pages/Home/home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}