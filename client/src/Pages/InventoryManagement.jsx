import React, {useEffect, useState} from 'react';
import Footer from '../Components/UI/Footer/Footer';
import Nav from '../Components/UI/Nav/Nav';
import style from './InventoryManagement.module.scss';
import img from '../Assets/inventory-management-illustration.svg';
import Button from '../Components/UI/Button/Button';
import Chart from '../Components/SubComponents/Chart/Chart';
import Input from '../Components/UI/Input/Input';
import axios from 'axios';
import UpdateModal from '../Components/SubComponents/UpdateModal/UpdateModal';
import NewProductModal from '../Components/SubComponents/NewProductModal/NewProductModal';
import InventoryCard from '../Components/SubComponents/InventoryCard/InventoryCard';

export default function InventoryManagement(props) {

    const [modal, setModal] = useState();
    const [inventory, setInventory] = useState();

    useEffect(() =>{
        document.title = "Inventory Management "
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            let renderProducts = productData.map(i => <InventoryCard key={i._id} productId={i._id} brand={i.brand} model={i.model} price={i.price} type={i.type} discountPrice={i.discountPrice} inStock={i.inStock} desc={i.desc}/>)
            setInventory(renderProducts);
        })
    }, [])

    const addGuitar = () => {
        setModal(<NewProductModal close={setModal}/>)
    }


  return (
    <div className={style.container}>
        <Nav/>
        <div className={style.pageContent}>
            <div className={style.left}>
                <h2 className={style.heading}>Our Inventory</h2>
                <h4 className={style.subHeading}>Welcome to the Inventory Management Page</h4>
                <div className={style.addButton} onClick={addGuitar}>Add Guitar+</div>
                {inventory}
                {modal}
            </div>
            <div className={style.right}>
                <Chart/>
            </div>
        </div> 
    </div>
  )
}
