import React from 'react';
import style from './Button.module.scss';

export default function Button(props) {
  return (
    <button
        id={props.id}
        brand={props.brand}
        className={`
        ${props.className ? props.classname : ""}
        ${props.type == "primary" ? style.primary : props.type == "secondary" ? style.secondary : props.type == "loginPageBtn" ? style.loginPageBtn : props.type == "priceFilterBtn" ? style.priceFilterBtn : props.type == "addToCart" ? style.addToCart : props.type == "browseNow" ? style.browseNow : style.tersiary}
        `} 
        onBlur={props.onBlur}
        onClick={props.onClick}>
            {props.text}

        </button>
  )
}
