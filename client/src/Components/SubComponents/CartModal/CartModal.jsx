import React from 'react';
import style from './CartModal.module.scss';
import img from '../../../Assets/img/acoustic-1.jpg';

import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';

export default function CartModal(props) {

    let cartItems = sessionStorage.getItem("cartItems");
    const closeModal = () => {
        props.closeTheModal(false);
    }

    const [cartProduct, setCartProduct] = useState();

    // TODO: Fix checkout button to remain fixed

    useEffect(() => {
        let cartItems = sessionStorage.getItem("cartItems");
        if(cartItems === undefined || cartItems === null){

        }else{
            cartItems = JSON.parse(cartItems);
            let cartProduct = cartItems.map(i => <CartItem  id={i.id} brand={i.brand} model={i.model} qty={i.qty} price={i.price} discountPrice={i.discountPrice} img={i.img}/>)
            setCartProduct(cartProduct);
        }
       
    }, [props.rerender])

  return (
    <div className={style.container} onMouseLeave={closeModal}>
        
        <table className={style.cartItems}>
            { cartItems !== undefined || cartItems !== null ? <thead>
                <th className={style.cartHeading}></th>
                <th className={style.cartHeading}>Product</th>
                <th className={style.cartHeading}>Color</th>
                <th className={style.cartHeading}>Qty</th>
                <th className={style.cartHeading}>Total</th>
            </thead> : ""}
            {cartProduct}
        </table>
        <Link to="/checkout"><Button text="Go To Checkout" type="primary"/></Link>
    </div>
  )
}
