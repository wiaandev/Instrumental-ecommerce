import React from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Checkout.module.scss';
import img from '../Assets/img/acoustic-1.jpg';
import trash from '../Assets/icons/trash.svg';
import Payment from '../Components/SubComponents/Payment/Payment';
import CheckoutItem from '../Components/SubComponents/CheckoutItem/CheckoutItem';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Checkout(props) {

    const [cartProduct, setCartProduct] = useState();

    useEffect(() => {
        let cartItems = sessionStorage.getItem("cartItems");
        if(cartItems === undefined || cartItems === null){

        }else{
            cartItems = JSON.parse(cartItems);
            console.log(cartItems);
            let cartProduct = cartItems.map(i => <CheckoutItem  id={i.id} brand={i.brand} model={i.model} qty={i.qty} price={i.price} discountPrice={i.discountPrice} img={i.img}/>)
            setCartProduct(cartProduct);
        }
       
    }, [props.rerender])

  return (
    <div className={style.container}>
        <Nav/>
        <div className={style.pageContent}> 
            <div className={style.left}>
                <h2 className={style.heading}>Shopping Cart</h2>
                <p className={style.subheading}>Ensure all of the below products are correct and enter your payment details below</p>
                <table>
                    <thead>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </thead>
                    {cartProduct}
                </table>
            </div>
            <div className={style.right}>
                <Payment/>
            </div>
        </div>

    </div>
  )
}
