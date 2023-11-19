import * as React from "react";
import { useSelector } from 'react-redux';
import Header from "../../CommonComponents/Header";
import EmptyCart from "./EmptyCart";
import NonEmptyCart from "./NonEmptyCart";

export default function Cart(props) {
    const cartItems = useSelector((o) => o.cartreducer.cartItems);
    return (
        <>
            <Header />
            {
                cartItems?.length == 0 ? <EmptyCart /> : <NonEmptyCart cartItems={cartItems} />
            }
        </>
    )
}