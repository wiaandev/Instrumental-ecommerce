import React from 'react'
import style from './Dropdown.module.scss';

export default function Dropdown() {
  return (
    <div className={style.container}>
        <select className={style.dropdown}>
            <option value="Default">Please Select...</option>
            <option value="Amber">Amber</option>
            <option value="Black">Black</option>
            <option value="Ivory">Ivory</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
        </select>         
    </div>
  )
}
