import React, {useEffect} from 'react';
import style from './OrderProcessing.module.scss';
import Nav from '../Components/UI/Nav/Nav';
import axios from 'axios';
import OrderItem from '../Components/SubComponents/OrderItem/OrderItem';
import { useState } from 'react';

export default function OrderProcessing() {

    const [orders, setOrders] = useState();

    useEffect(() =>{
        document.title = "Order Processing"
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/allorders')
        .then(res => {
            let data = res.data;
            let orderItems = data.map(i => <OrderItem key={i._id} id={i._id} date={i.orderDate} name={i.userInfo.email} amount={i.userInfo.amountPaid} brand={i.products.guitarBrand} model={i.products.model}/>)
            setOrders(orderItems);
        })
        .catch(err => console.log(err));
    }, [])

  return (
        <div className={style.container}>
        <Nav/>

        <div className={style.pageContent}>
            <div className={style.left}>
                <h4 className={style.leftHeading}>Our Orders</h4>
                <div className={style.ordersSummaryGroup}>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                    <div className={style.itemGroup}>
                        <h3>278</h3>
                        <h4 className={style.itemDesc}>Total Orders</h4>
                    </div>

                </div>


            </div>
            <div className={style.right}>
                <h2 className={style.heading}>Our Orders</h2>
                <div className={style.flexCon}>
                {orders} 
                </div> 

            </div>
        </div>
    </div>
  )
}
