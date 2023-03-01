import { useCart } from "../../hooks/useCart";
import { OrderList } from "./components/OrderList/OrderList";
import { PaypalButton } from "./components/PaypalButton/PaypalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Container from "@mui/material/Container";

export function ConfirmOrder() {
    const idrToUsd = 0.000063 //1 Mar Data
    const options = {
        "client-id": "AYya9ctpWi-QvNc6ke49J2FZAIKALPM8V_Weu8QM35SPFXaP39b3AXMcBEBdtqiQd7BiNi_O5CUk53Bl",
        currency: "USD",
        intent: "capture",
    }
    const { cartTotalPrice } = useCart()

    return (
        <PayPalScriptProvider options={options}>
            <Container 
                sx={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <OrderList idrToUsd={idrToUsd}/>

                <PaypalButton currency={options.currency} amount={cartTotalPrice}/>
            </Container>
        </PayPalScriptProvider>
    )
}