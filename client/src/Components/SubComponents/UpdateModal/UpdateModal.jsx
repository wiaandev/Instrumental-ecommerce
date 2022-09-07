import React, {useState} from 'react'
import style from './UpdateModal.module.scss';
import Input from '../../UI/Input/Input';
import axios from 'axios';
import { useEffect } from 'react';

export default function UpdateModal(props) {

    const [run, setRun] = useState(false);

    let editFormValues = {brand: props.brand, model: props.model, desc: props.desc, type: props.type, inStock: props.inStock};

    const [editValues, setEditValues] = useState(editFormValues);

    const updateValues = (e) =>{
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
        console.log(editValues);
    }

    const closeModal = () => {
        props.close();
    }

    const updateGuitar = e => {
        e.preventDefault();
        let guitarId = props.id;
        let payload = editValues;
        console.log(payload);
        axios.patch('http://localhost:5000/api/updateproduct/' + guitarId, payload)
        .then( res => {
            if(res){
                console.log('user updated!');
                props.close();
                window.location.reload();
            }
        })
        .catch(err => console.log(err));
    }

  return (
<div className={style.container}>
    <div className={style.modal}>
        <h1>Update Guitar</h1>
    <form className={style.form} onSubmit={updateGuitar}>
    <div className={style.flex}>
    <Input
        name="brand"
        defaultValue={props.brand}
        placeholder="Brand"
        onChange={updateValues}
        type="modalInput" 
    />
    <Input
        name="model"
        defaultValue={props.model}
        placeholder="Model"
        onChange={updateValues} 
        type="modalInput" 
    />
    <Input
        name="type"
        defaultValue={props.type}
        placeholder="Type"
        onChange={updateValues} 
        type="modalInput" 
    />
    </div>
    <div className={style.flex}>
        <Input
            name="price"
            defaultValue={props.price}
            placeholder="Price"
            onChange={updateValues} 
            type="modalInput" 
            inputType="number" 
        />
        <Input
            name="discountPrice"
            defaultValue={props.discountPrice}
            placeholder="Discount Price"
            onChange={updateValues} 
            type="modalInput"
            inputType="number" 
        />
    </div>
        <div className={style.flex}>
                <Input
                    name="inStock"
                    defaultValue={props.inStock}
                    placeholder="In Stock"
                    onChange={updateValues}
                    type="modalInput"
                    inputType="number"  
                />
                <Input
                    name="desc"
                    defaultValue={props.desc}
                    placeholder="Description"
                    onChange={updateValues}
                    type="longInput"  
                />

        </div>
        <button className={style.updateBtn}>
            <p className={style.btnText}>Update User</p>
        </button>
        <p className={style.cancel} onClick={closeModal}>Cancel</p>
    </form>
    </div>    
    </div>
)}