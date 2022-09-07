import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import trash from '../../../Assets/icons/trash.svg';
import style from './CheckoutItem.module.scss';

export default function CheckoutItem(props) {

    const [removed, setRemoved] = useState();

    const removeProduct = () => {
        let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
        if(cartItems === null || cartItems === undefined){

        }else{
            for(let i = 0; i < cartItems.length; i++){
                if(props.id === cartItems[i].id){
                    cartItems.splice(i, 1);
                    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
                }
            }
        }
        setRemoved("REMOVED");
        window.location.reload();

    }

  return (
    <>
    <tr>
        <td className={style.productImg}><img src={props.img} width={150}/></td>
        <td>{props.brand} {props.model}</td>
        <td>{props.qty}</td>
        <td>R{props.price}</td>
        <td><img onClick={removeProduct} src={trash}/></td>
    </tr>
    </>
  )
}
