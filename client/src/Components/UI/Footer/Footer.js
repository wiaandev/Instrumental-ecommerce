import React from 'react'
import style from './Footer.module.scss';
import logo from '../../../Assets/logo-dark.svg';
import twitter from '../../../Assets/icons/twitter.svg';
import instagram from '../../../Assets/icons/instagram.svg';
import facebook from '../../../Assets/icons/facebook.svg';
import Input from '../Input/Input';

export default function Footer() {
  return (
    <div className={style.container}>
        <img src={logo} width={100}/>

        <div className={style.socialContainer}>
            <img src={twitter} width={30}/>
            <img src={instagram} width={30}/>
            <img src={facebook} width={30}/>
        </div>

        <div className={style.emailContainer}>
            <label htmlFor='email'>Email Us</label>
            <Input placeholder="someone@gmail.com" type="secondary"/>
        </div>
    </div>
  )
}
