import React, {useState, useEffect} from 'react';
import Nav from '../Components/UI/Nav/Nav';
import style from './Home.module.scss';
import Slider from '../Components/SubComponents/Slider/Slider';
import Card from '../Components/SubComponents/Card/Card';
import Footer from '../Components/UI/Footer/Footer';
import { sliderImages } from '../Components/sliderImages';
import axios from 'axios';
import Button from '../Components/UI/Button/Button';
import { Link } from 'react-router-dom';
import CartModal from '../Components/SubComponents/CartModal/CartModal';
import chevLeft from '../Assets/icons/goLeft.svg';
import chevRight from '../Assets/icons/goRight.svg';

export default function Home(props) {

    const [ modalOpen, setModalOpen ] = useState(false);

    const [products, setProducts] = useState();

    const images = sliderImages

    useEffect(() =>{
        document.title = "Instrumental | Home"
    }, [])

    const goLeft = (e) => {
        let scrollBtn = e.currentTarget.parentNode;
        let currPos = scrollBtn.scrollLeft;
        scrollBtn.scroll({
            left: currPos -= 1200,
            top: 0,
            behaviour: 'smooth'
        })
    }

    const goRight = (e) => {
        let scrollBtn = e.currentTarget.parentNode;
        let currPos = scrollBtn.scrollLeft;
        scrollBtn.scroll({
            left: currPos += 1200,
            top: 0,
            behaviour: 'smooth'
        })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/allproducts')
        .then(res => {
            let productData = res.data;
            let renderProducts = productData.map(i => <Card key={i._id} productId={i._id} brand={i.brand} model={i.model} price={i.price} discountPrice={i.discountPrice} imgUrl={i.imgUrl[0]} qty={i.inStock}/>)
            setProducts(renderProducts);
        })
        .catch(err => console.log(err))
    }, [])


  return (
    <div className={style.page}>
        <Nav openTheModal={value /*true*/ => setModalOpen(value)}/>
        {
            modalOpen
            ?   <CartModal rerender={props.rerender} setRerender={props.setRerender}
                closeTheModal={value => setModalOpen(value)} 
            />
            : ''
        }
        <Slider/>
        <div className={style.cardCon}>
            <img onClick={goLeft} className={style.chevron} src={chevLeft} width={50}/>
            {products}
            <img onClick={goRight} className={style.chevronRight} src={chevRight}/>
        </div>

        <div className={style.lowStockCon}>
            <h3 className={style.heading}>While Stocks Last</h3>
            <div className={style.cardCon}>
            <img onClick={goLeft} className={style.chevron} src={chevLeft} width={50}/>
            {products}
            <img onClick={goRight} className={style.chevronRight} src={chevRight}/>
            </div>

        </div>

        <div className={style.bottomSection}>
            <h4 className={style.bottomSection_heading}>Not finding what you are looking for?</h4>
            <Link to="/products"><Button text="Browse Now" type="browseNow"/></Link>
        </div>

        <Footer/>

    </div>
  )
}
