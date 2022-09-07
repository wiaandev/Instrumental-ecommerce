import React, { useState } from 'react'
import Footer from '../Components/UI/Footer/Footer';
import Nav from '../Components/UI/Nav/Nav';
import style from './IndividualProduct.module.scss';
import arrowLeft from '../Assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/UI/Button/Button';
import minus from '../Assets/icons/minus.svg';
import plus from '../Assets/icons/plus.svg';
import ColorPicker from '../Components/SubComponents/ColorPicker/ColorPicker';
import Pill from '../Components/UI/Pill/Pill';
import { useEffect } from 'react';
import axios from 'axios';
import CartModal from '../Components/SubComponents/CartModal/CartModal';
import { useRef } from 'react';

export default function IndividualProduct(props) {

    const [ modalOpen, setModalOpen ] = useState(false);

    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const productAmount = useRef();

    let productId = sessionStorage.getItem("productId");

    const addToCart = () => {

        let checkUser = sessionStorage.getItem("currentUser"); 
        let checkCart = sessionStorage.getItem("cartItems");
        let cartArr = [];
    
        if(!sessionStorage.getItem("currentUser")){
            navigate('/login')
        }else{
    
            if(checkCart.length === 0){
            let cartData = {
                id: productData.productId,
                brand: productData.productBrand,
                model: productData.productModel,
                user: checkUser,
                price: productData.productPrice,
                discountPrice: productData.discountPrice,
                img: productData.productImg,
                qty: qty
                // color: ,
            }
        
            cartArr.push(cartData);
        
            sessionStorage.setItem('cartItems', JSON.stringify(cartArr));
            } else{
            let parsedData = JSON.parse(checkCart);
    
            let cartData = {
                id: productData.productId,
                brand: productData.productBrand,
                model: productData.productModel,
                user: checkUser,
                price: productData.productPrice,
                discountPrice: productData.discountPrice,
                img: productData.productImg,
                qty: qty
                // color: ,
            }
    
            parsedData.push(cartData);
    
            sessionStorage.setItem('cartItems', JSON.stringify(parsedData));
            }
            props.setRerender(true);

        }
    }

    const [productData, setProductData] = useState({
        productBrand: "",
        productModel: "",
        productType: "",
        productDiscountPrice: "",
        productPrice: "",
        productInStock: "",
        productDesc: "",
        productImg: ""
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/oneproduct/' + productId)
        .then(res => {
            let data = res.data;
            setProductData({
                productBrand: data.brand,
                productModel: data.model,
                productType: data.type,
                productDiscountPrice: data.discountPrice,
                productPrice: data.price,
                productInStock: data.inStock,
                productDesc: data.desc,
                productImg: data.imgUrl[0],
                productHandedness: data.productDetails.handedness,
                productNeckLength: data.productDetails.neckLength
            })

        })
    }, [])

  return (
    <div className={style.container}>
        <Nav rerender={props.rerender} setRerender={props.rerender} openTheModal={value /*true*/ => setModalOpen(value)}/>
        {
            modalOpen
            ?   <CartModal
                closeTheModal={value => setModalOpen(value)}
            />
            : ''
        }

        <div className={style.pageContent}>



            <div className={style.left}>

                <div className={style.goBack} onClick={() => navigate(-1)}>
                    <img src={arrowLeft}/>  
                    <p className={style.pBlue}>Go Back</p>
                </div>

                <div className={style.productImg}>
                    <img src={productData.productImg}/>
                </div>
                <br />
                {productData.productInStock < 10 ? <p className={style.lowStock}>Only {productData.productInStock} Left!</p> : ""}
                <hr />
                <p className={style.pBlue}>Quantity</p>
                <div className={style.flex}>
                    {qty == 1 ? <img className={style.disabled} src={minus} width={20}/> : <img src={minus} width={20} onClick={() => setQty(qty - 1)}/>}
                    <h4 className={style.qty}>{qty}</h4>
                    <img src={plus} width={20} onClick={() => setQty(qty + 1)}/>
                </div>
                <hr />
                <p className={style.pBlue}>Select a color</p>
                <div className={style.flex}>
                    <ColorPicker/>
                    <ColorPicker/>
                    <ColorPicker/>
                </div>
                <hr />
                <p className={style.pBlue}>Select Neck Height</p>
                <div className={style.flexPill}>
                    <Pill text="545mm"/>
                    <Pill text="545mm"/>
                    <Pill text="545mm"/>
                </div>
                <hr />
                <Button text="Add to Cart" type="addToCart" onClick={addToCart}/>
            </div>

            <div className={style.right}>
                <h3>{productData.productBrand} {productData.productModel}</h3>
                <h4>{productData.productType}</h4>
                <div className={style.flex}>
                    { productData.productDiscountPrice ? <h3 className={style.oldPrice}>R{productData.productPrice}</h3> : <h3 className={style.totalPrice}>R{productData.productPrice}</h3>}
                    { productData.productDiscountPrice ? <h3 className={style.totalPrice}>R{productData.productDiscountPrice}</h3> : ""}
                </div>
                <br />
                <p className={style.aboutProductHeading}>About The Product</p>
                <br />
                <p className={style.desc}>{productData.productDesc}</p>
                 <br />
                 <br />
                 <div className={style.flexDesc}>
                    <div className={style.column}>
                        <h3>{productData.productNeckLength}mm</h3>
                        <h4 className={style.pBlue}>Neck Length</h4>
                    </div>
                    <div className={style.column}>
                        <h3>{productData.productHandedness}</h3>
                        <h4 className={style.pBlue}>Handedness</h4>
                    </div>

                 </div>
            </div>

        </div>


        <Footer/>
    </div>
  )
}
