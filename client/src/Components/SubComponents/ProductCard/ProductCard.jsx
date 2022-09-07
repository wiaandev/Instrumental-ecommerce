import React from 'react';
import style from './ProductCard.module.scss';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {

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


      if(checkCart === null || checkCart === undefined){
        let cartData = {
          brand: props.brand,
          model: props.model,
          id: props.productId,
          user: checkUser,
          price: props.price,
          discountPrice: props.discountPrice,
          img: props.img,
          qty: 1
          // color: ,
        }
  
        cartArr.push(cartData);
  
        sessionStorage.setItem('cartItems', JSON.stringify(cartArr));
      } else{
        let parsedData = JSON.parse(checkCart);

        let cartData = {
          brand: props.brand,
          model: props.model,
          id: props.productId,
          user: checkUser,
          price: props.price,
          discountPrice: props.discountPrice,
          img: props.img,
          qty: 1
          // color: ,
        }

        parsedData.push(cartData);

        sessionStorage.setItem('cartItems', JSON.stringify(parsedData));
      }
      props.setRerender(true);
    }
  }

  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <img src={props.img}/>
        </div>
        <div className={style.descContainer}>
            <h5>{props.brand} {props.model}</h5>
            { props.discountPrice ? <h4 className={style.prevPrice}>R{props.price}</h4> : <h4 className={style.discountPrice}>{props.discountPrice}</h4>}
            { props.discountPrice ? <h4 className={style.discountPrice}>R{props.discountPrice}</h4> : <h4 className={style.discountPrice}>R{props.price}</h4>}
        </div>
        <Button text="Add to Cart" type="secondary" onClick={addToCart}/>
        <Button text="view more" type="tersiary" onClick={goToGuitar}/>
    </div>
  )
}
