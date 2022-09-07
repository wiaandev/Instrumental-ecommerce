import React, { useEffect } from 'react';
import style from './Nav.module.scss';
import logo from '../../../Assets/logo-light.svg';
import { Link } from 'react-router-dom';
import cart from '../../../Assets/icons/cart.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import userIcon from '../../../Assets/icons/user.svg';

export default function Nav( props ) {

    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);
    const [name, setName] = useState();

    const open = () => {
        props.openTheModal(true);
    }

    const close = () => {
        props.openTheModal(false);
    }

    useEffect(() => {
        let currUser = sessionStorage.getItem('currentUser');
        let adminCheck = sessionStorage.getItem('admin');

        if(currUser === '' || currUser === null || currUser === undefined){
            console.log(true);
        }else{
            console.log(false);
            setUser(true);
            if(adminCheck === "true"){
                setAdmin(true);
                setName("Admin")
            }else{
                setAdmin(false);
                setName(currUser);
            }
        }

    }, [])

    const logOut = () => {
        sessionStorage.clear('admin');
        sessionStorage.clear('currentUser');
        setAdmin(false);
        setUser(false);
        setName();
    }

  return (
    <div className={style.nav}>
        <img className={style.logo} src={logo} width={100} alt="instrumental_logo"/>
        <ul className={style.navItems}>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            {admin ? <Link to='/inventory-management'><li>IM</li></Link> : ""}
            {admin ? <Link to='/order-processing'><li>OP</li></Link> : ""}
            <Link to='/about-us'><li>About Us</li></Link>
        </ul>
        <div className={style.search}>
        <Input placeholder="Search..." type='searchInput' inputType="text"/>
        </div>
        <div className={user ? style.hide : style.flexCol}>
            <Link to='/login'><p>Log In</p></Link>
            <Button text='Register' type="primary"/>
        </div>
        <div className={user ? style.profile : style.hide}>
            <img src={userIcon} width={30}/>
            <p>{name}</p>
            <div onClick={logOut} className={style.logOut}>Log Out</div>
        </div>
        <img className={style.cart} src={cart} width={25} onMouseEnter={open}/>
    </div>
  )
}
