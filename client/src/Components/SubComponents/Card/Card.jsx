import React from 'react';
import Button from '../../UI/Button/Button';
import style from './Card.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {

    const navigate = useNavigate();

    const goToGuitar = () => {
      var thisThing = sessionStorage.setItem('productId', props.productId);
      navigate('/individual-product');
    }

    const addToCart = () => {

        let checkUser = sessionStorage.getItem("currentUser"); 
        let checkCart = sessionStorage.getItem("cartItems");
        let cartArr = [];
    
        if(!sessionStorage.getItem("currentUser")){
            navigate('/login')
        }else{
    
            if(checkCart.length == 0){
            let cartData = {
                id: props.id,
                brand: props.brand,
                model: props.model,
                user: checkUser,
                price: props.price,
                discountPrice: props.discountPrice,
                img: props.imgUrl,
                qty: 1
                // color: ,
            }
        
            cartArr.push(cartData);
        
            sessionStorage.setItem('cartItems', JSON.stringify(cartArr));
            } else{
            let parsedData = JSON.parse(checkCart);
    
            let cartData = {
                id: props.id,
                brand: props.brand,
                model: props.model,
                user: checkUser,
                price: props.price,
                discountPrice: props.discountPrice,
                img: props.imgUrl,
                qty: 1
                // color: ,
            }
    
            parsedData.push(cartData);
    
            sessionStorage.setItem('cartItems', JSON.stringify(parsedData));
            }

        }
    }

  return (
    <div className={style.cardContainer}>

        <div className={style.imgContainer}>
            {props.qty < 10 ? <p className={style.stockWarning}>{props.qty} Left</p> : ""}
            <img src={props.imgUrl}/>
        </div>

        <div className={style.bottomContainer}>

            <div className={style.itemName}>
                <h4>{props.brand} {props.model}</h4>
                <div className={style.priceContainer}>
                    { props.discountPrice ? <h4 className={style.prevPrice}>R{props.price}</h4> : <h4 className={style.discountPrice}>{props.discountPrice}</h4>}
                    { props.discountPrice ? <h4 className={style.discountPrice}>R{props.discountPrice}</h4> : <h4 className={style.discountPrice}>R{props.price}</h4>}
                </div>

            </div>

            <div className={style.buttonWrapper}>
                <p onClick={goToGuitar}>View More</p>
                <Button onClick={addToCart} text="Add to Cart" type="secondary"/>
            </div>

        </div>


    </div>
  )
}
