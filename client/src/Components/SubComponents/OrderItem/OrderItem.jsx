import React from 'react';
import style from './OrderItem.module.scss';
import axios from 'axios';

export default function OrderItem(props) {

    const dispatch = () => {
      axios.delete('http://localhost:5000/api/deleteorder/' + props.id)
      .then( res => {
          window.location.reload();
      })
    }

  return (
    <div className={style.orderCard}>
        <h4 className={style.orderHeading}>Order #{props.id}</h4>
        <br />
        <p>{props.brand} {props.model}</p>
        {props.qty}
        <p><b>Date Ordered: </b>{props.date} </p>
        <p><b>Ordered By: </b>{props.name} {props.surname}</p>
        <br />
        <hr />
        <br />
        <p>Amount Paid</p>
        <h5 className={style.amount}>R{props.amount}</h5>
        <div onClick={dispatch} className={style.dispatch}>Dispatch</div>
    </div>
  )
}
