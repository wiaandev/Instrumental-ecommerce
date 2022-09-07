import React from 'react';
import style from './FilterCard.module.scss';
import img from '../../../Assets/img/card-item.jpg';

export default function FilterCard(props) {
  return (
    <div className={style.container}>
        <h4>{props.text}</h4>
    </div>
  )
}
