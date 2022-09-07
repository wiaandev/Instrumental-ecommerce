import React from 'react';
import style from './Filter.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useRef } from 'react';
import Dropdown from '../../UI/Dropdown/Dropdown';

export default function Filter() {

    const priceInput = (e) => {
        let value = e.target.value;
        let sliderValue = document.querySelector("span").textContent = "R" + value;
    }

  return (
    <div className={style.container}>
        <h4>Filter</h4>
        <p>Use this section to search what you are looking for</p>
        <Input type='filterInput' placeholder="Filter a product..."/>
        <div className={style.priceFilter}>
            <div className={style.sliderValue}>
                <span>R0</span>
            </div>
            <div className={style.field}>
                <div className={style.valueLeft}>R0</div>
                <Input inputType="range" type="priceSlider" min="0" max="70000" step="1" onChange={priceInput} defaultValue={0}/>
                <div className={style.valueRight}>R70,000</div>
            </div>
            <Button text="Filter" type="priceFilterBtn"/>
        </div>
        <hr />
        <label htmlFor='colorFilter'>Model</label>
        <Dropdown/>
        <label htmlFor='colorFilter'>Color</label>
        <Dropdown/>
        <label htmlFor='colorFilter'>Handedness</label>
        <Dropdown/>
        <br />
        <Button text="Filter" type="primary"/>

    </div>
  )
}
