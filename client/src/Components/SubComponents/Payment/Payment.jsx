import axios from 'axios';
import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import style from './Payment.module.scss';

export default function Payment() {

  const addOrder = ()  => {

    let cart = JSON.parse(sessionStorage.getItem("cartItems"));
    for(let i = 0; i< cart.length; i++){
      let payload = {
      products: {
      guitarBrand: cart[i].brand,
      model: cart[i].model,
      qty: cart[i].qty
      },
      userInfo:{
          email: cart[i].user,
          amountPaid: cart[i].price
      }
    }

    axios.post('http://localhost:5000/api/addorder', payload)
    .then(res => {
    })
    .catch(err => console.log(err));

    sessionStorage.clear("cartItems");
  }}

  return (
    <div className={style.container}>
        <h3 className={style.heading}>Payment Details</h3>
        <p className={style.subheading}>Enter your payment details to conclude your order</p>

        <label htmlFor='name'>Name</label>
        <Input name="name" type="paymentInput" placeholder="Name on Card"/>

        <label htmlFor='name'>Account Number</label>
        <Input name="name" type="paymentInput" placeholder="XXXX-XXXX-XXX-XX" inputType="number"/>

        <div className={style.flex}>

            <div className={style.flexCol}>
                <label htmlFor='name'>Expiration Date</label>
                <Input name="name" type="paymentInput" placeholder="Name on Card" inputType="date"/>
            </div>

            <div className={style.flexCol}>
            <label htmlFor='name'>CVV</label>
            <Input name="name" type="paymentInput" placeholder="XXX" inputType="number" max="3"/>
            </div>


        </div>

        <Button onClick={addOrder} text="Checkout" type="primary"/>


    </div>
  )
}
