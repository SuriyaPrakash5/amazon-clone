import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Orders.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";


function Orders() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {
                    basket?.map(data => (
                        <CheckoutProduct
                            id={data.id}
                            title={data.title}
                            image={data.image}
                            price={data.price}
                            rating={data.rating}
                            hideButton
                        />
                    ))
                }
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3 className='order__total'>Order Total: {value}</h3>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs."}
                />

            </div>
        </div>
    )
}

export default Orders
