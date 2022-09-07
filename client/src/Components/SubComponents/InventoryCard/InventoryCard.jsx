import React, {useState} from 'react';
import Button from '../../UI/Button/Button';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import UpdateModal from '../UpdateModal/UpdateModal';
import style from './InventoryCard.module.scss';

export default function InventoryCard(props) {

    const [modal, setModal] = useState();

    const deleteGuitar = () => {
        setModal(<ConfirmModal
            close={setModal}
            brand={props.brand}
            model={props.model}
            id={props.productId}
        />)
    }

    const update = () => {
        setModal(<UpdateModal
            close={setModal}
            brand={props.brand}
            id={props.productId}
            model={props.model}
            type={props.type}
            price={props.price}
            discountPrice={props.discountPrice}
            inStock={props.inStock}
            desc={props.desc}
        />)
    }

  return (
    <div className={style.container}>
        <h4 className={style.cardHeading}>{props.brand} {props.model}</h4>
        <p>{props.type} guitar</p>
        <p>{props.color}</p>
        <p>{props.inStock} in Stock</p>
        <p>R{props.price}</p>
        {props.discountPrice ? <p>R{props.discountPrice}</p> : ""}
        <div style={{display: "flex"}}>
        <div onClick={update} className={style.update}>Update</div>
        <div onClick={deleteGuitar} className={style.delete}>Delete</div>
        </div>

        {modal}
    </div>
  )
}
