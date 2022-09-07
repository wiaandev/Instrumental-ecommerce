import React, {useState} from 'react'
import style from './CartItem.module.scss';
import trash from '../../../Assets/icons/trash-light.svg';

export default function CartItem(props) {

    const [removed, setRemoved] = useState()

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

    }

  return (
    <>
        <tr>
            <td><img src={props.img} width={70}/></td> 
            <td><p>{props.brand} {props.model}</p></td> 
            <td><p>{props.color}</p></td> 
            <td><p>{props.qty}</p></td> 
            <td><p className={style.totalPrice}>R{props.price}</p></td>  
            <td><img onClick={removeProduct} src={trash} width={20}/></td>  
        </tr>
        <p className={style.removed}>{removed}</p>
        <hr className={style.cartDivider}/></>
  )
}
