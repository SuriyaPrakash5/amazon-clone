import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer'


function Payment() {
    const history = useNavigate();

    const [{ basket, user }, dispatch] = useStateValue();

    const handleSubmit = e => {

        e.preventDefault()
        history('/orders')

    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* payment section -  payment section */}
                <div className='payment__section'>

                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email.substring(0, user?.email.indexOf('@'))}</p>
                        <p>123 React Lane</p>
                        <p>Trichy, Tamil Nadu</p>
                    </div>

                </div>

                {/* payment section - review items */}
                <div className='payment__section'>

                    <div className='payment__title'>
                        <h3>Review items and elivery</h3>
                    </div>

                    <div className='payment__items'>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>

                </div>
                {/* payment section - payment method */}
                <div className='payment__section'>

                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>
                        {/* stripe magic will go here */}

                        <form>
                            <label>Card Number</label>
                            <input type='text' placeholder='XXXX XXXX XXXX XXXX' /><br></br>
                            <label>Valid Upto</label>

                            <input type='text' placeholder='MM/YY' /><br></br>
                            <label>CVC Number</label>

                            <input type='text' placeholder='CVC' />

                            <div className='payment__priceContainer'>

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs."}
                                />

                                <button onClick={handleSubmit}>
                                    Buy Now</button>

                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
