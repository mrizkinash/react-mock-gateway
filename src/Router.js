import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/Default/default";
import { Home } from "./views/Home/home";
import { ConfirmOrder } from "./views/ConfirmOrder/confirmOrder";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="confirmOrder" element={<ConfirmOrder />}/>
            </Route>
        </Routes>
    )
}