import React, { useState } from 'react';
import axios from 'axios';
import style from './NewProductModal.module.scss';
import Input from '../../UI/Input/Input';

export default function NewProductModal(props) {

    const defValues = ["brand", "model", "type", "price", "discountPrice", "inStock", "desc", "imgUrl", "neckLength", "handedness", "colorOne", "colorTwo", "colorThree"] 

    const [imageName, setImageName] = useState("Image name will appear here");
    const [productImage, setProductImage] = useState();

    const [values, setValues] = useState(defValues);

    const [updateUsers, setUpdateUsers] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const addProduct = (e) => {
        e.preventDefault();

        let payload = {
            brand: values["brand"],
            model: values["model"],
            type: values["type"],
            price: +values["price"],
            discountPrice: +values["discountPrice"],
            inStock: +values["inStock"],
            desc: values["desc"],
            imgUrl: [values["imgUrl"]],
            productDetails: {
                neckLength: +values["neckLength"],
                handedness: values["handedness"],
                colors: [
                    values["colorOne"],
                    values["colorTwo"],
                    values["colorThree"]
                ]
            }
        }


        axios.post('http://localhost:5000/api/addproduct', payload)
        .then(res => {
            window.location.reload();
        })
    }

    const closeModal = () => {
        props.close();
    }

  return (
    <div className={style.container}>
    <div className={style.modal}>
        <h1>Add Guitar</h1>
    <form className={style.form} onSubmit={addProduct}>
    <div className={style.flexCon}>
        <Input
            name="brand"
            placeholder="Brand"
            onChange={handleInputChange}
            type="modalInput" 
        />
        <Input
            name="model"
            placeholder="Model"
            onChange={handleInputChange} 
            type="modalInput"
        />
        <Input
            name="type"
            placeholder="Type"
            onChange={handleInputChange} 
            type="modalInput"
        />
    </div>

    <div className={style.flexCon}>
        <Input
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            type="modalInput" 
        />
        <Input
            name="discountPrice"
            placeholder="Discount Price"
            onChange={handleInputChange} 
            type="modalInput"
        />
    </div>

    <Input
        name="inStock"
        placeholder="In Stock"
        onChange={handleInputChange} 
        type="longInput"
    />
    <Input
        name="desc"
        placeholder="Description"
        onChange={handleInputChange} 
        type="longInput"
    />
    <Input
    name="imgUrl"
    placeholder="Input Img Url"
    onChange={handleInputChange} 
    type="longInput"
    />
    <div className={style.flexCon}>
        <Input
            name="neckLength"
            placeholder="Neck Length"
            onChange={handleInputChange}
            type="modalInput" 
        />
        <Input
            name="handedness"
            placeholder="Handedness"
            onChange={handleInputChange} 
            type="modalInput"
        />
    </div>
    <div className={style.flexCon}>
        <Input
            name="colorOne"
            placeholder="Color 1"
            onChange={handleInputChange} 
            type="modalInput"
        />
        <Input
            name="colorTwo"
            placeholder="Color 2"
            onChange={handleInputChange} 
            type="modalInput"
        />
        <Input
            name="colorThree"
            placeholder="Color 3"
            onChange={handleInputChange} 
            type="modalInput"
        />
    </div>

    <button className={style.updateBtn}>
        <p className={style.btnText}>Add Guitar</p>
    </button>
    <p className={style.cancel} onClick={closeModal}>Cancel</p>
    </form>
    </div>    
    </div>
  )
}
