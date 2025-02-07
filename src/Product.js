import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const notify = () => {

        toast.success(
            `
            Price : ${price}
            Added to Basket`, {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    const addToBasket = () => {
        // dispatch the item into the data layer
        notify()
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (

        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>

            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    );
}

export default Product;