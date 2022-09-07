import React, {useState, useEffect, useRef} from 'react'
import style from './Login.module.scss';
import logo from '../Assets/logo-light.svg';
import bgImg from '../Assets/img/bg-img.jpg';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const defVals = ['email', 'password'];
    const [values, setValues] = useState(defVals);
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    const [emailWarn, setEmailWarn] = useState();
    const [passwordWarn, setPasswordWarn] = useState();



    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = () => {

        let payload = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        }

        let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        if(!email.match(mailRegex) && !password.match(passRegex)){
            setEmailWarn('Email is incorrect! Try Again');
            setPasswordWarn('Password is incorrect! Try again');
        }else if (email === "" && password == ""){
            setEmailWarn('Enter an email');
            setPasswordWarn('Enter a password');
        }else {
            axios.post('http://localhost:5000/api/loginuser', payload)
            .then(res => {
                if(res.data.user){
                    sessionStorage.setItem('admin', res.data.findUser.admin)
                    sessionStorage.setItem('currentUser', res.data.findUser.name)
                    if(sessionStorage.getItem('admin') === "true"){
                        navigate('/inventory-management') 
                    } else{
                        navigate('/')
                    }

                }else{
                    setEmailWarn('Incorrect credential');
                    setPasswordWarn('Incorrect credential');
                }


            })
            .catch(err => console.log(err));
        }




    }

  return (
    <div className={style.page}>

        <div className={style.left}>
            <div className={style.bgImg}><img src={bgImg} alt="bg_img"/></div>
            <img className={style.logo} src={logo} width={400} alt="Instrumental_Logo"/>
        </div>

        <div className={style.right}>
            <h3 className={style.heading}>LOG IN</h3>
            <h4 className={style.subText}>Welcome Back to Instrumental! <br /> Enter your details below</h4>
            <div className={style.flex}>
                <Input
                    name="email" 
                    placeholder="someone@gmail.com"
                    inputType="email"
                    type="primary"
                    value={values["email"]}
                    ref={ emailInput }
                    // onChange={handleInputChange}
                />
                <p className={style.emailWarn}>{emailWarn}</p>
            </div>
            <br />
            <div className={style.flex}>
                <Input
                    name="password"  
                    placeholder="Password" 
                    inputType="password"
                    type="primary"
                    value={values["password"]}
                    ref={ passwordInput }
                />
                <p className={style.passwordWarn}>{passwordWarn}</p>
            </div>
            <br />
            <Button text="Log In" onClick={ handleForm } type="loginPageBtn"/>
            <br />
            <img src={logo} width={150}/>
        </div>
    </div>
  )
}
