import React, {forwardRef} from 'react';
import style from './Input.module.scss'

// TODO: ForwardRef | Scale Input Down
const Input =  forwardRef((props, ref) => {
    return (
      <input
          type={props.inputType}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          name={props.name}
          className={`
            ${props.className ? props.classname : ""}
            ${props.type == "primary" ? style.primary : props.type == "secondary" ? style.secondary : props.type == "searchInput" ? style.searchInput : props.type == "filterInput" ? style.filterInput : props.type == "priceSlider" ? style.priceSlider : props.type == "paymentInput" ? style.paymentInput : props.type === "modalInput" ? style.modalInput : props.type === "longInput" ? style.longInput : style.tersiary}
          `} 
          id={props.id}
          onChange={props.onChange}
          ref={ref}
          onKeyPress={props.onKeyPress}
          min={props.min}
          max={props.max}
          value={props.value}
          step={props.step}
      />
    )
  });
  
  export default Input;
