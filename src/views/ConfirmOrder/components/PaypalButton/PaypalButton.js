import { PayPalButtons } from "@paypal/react-paypal-js";
import Container from "@mui/material/Container";

export function PaypalButton(props) {

    function onCreateOrder(data, actions) {
        return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: props.currency,
                                value: props.amount,
                            },
                        },
                    ],
                });
    }

    function onApproveOrder (data, actions) {
        return actions.order.capture()
                .then((details) => {
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name}`);  
                })
    }

    return (
        <Container maxWidth={false}>
            <PayPalButtons 
                style={{ layout: "vertical" }}
                createOrder={onCreateOrder}
                onApprove={onApproveOrder}
            />
        </Container>
    )
}