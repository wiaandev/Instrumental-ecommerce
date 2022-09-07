import React, {useEffect} from 'react'
import Nav from '../Components/UI/Nav/Nav';
import style from './AboutUs.module.scss';
import comingSoon from '../Assets/coming-soon.svg';

export default function AboutUs() {

    useEffect(() =>{
        document.title = "Instrumental | About Us"
     }, [])

  return (
    <div className={style.container}>
        <Nav/>
        <div className={style.pageContent}>
        <img src={comingSoon} width={300}/>
        <h2>Coming Soon!</h2><span>(catching bugs)</span>
        </div>

    </div>
  )
}
