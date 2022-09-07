import React, {useState, useEffect} from 'react';
import Button from '../../UI/Button/Button';
import style from './ConfirmModal.module.scss';
import axios from 'axios';

export default function ConfirmModal(props) {

    const deleteGuitar = () => {
        axios.delete('http://localhost:5000/api/deleteproduct/' + props.id)
        .then( res => {
            window.location.reload();
        })
    }

    const closeModal = () => {
        props.close();
    }

  return (
    <div className={style.container}>
        <div className={style.modal}>
            <h3>Delete This?</h3>
            <h4>Are you sure you want to delete {props.brand} {props.model}?</h4>
            <div className={style.flexCon}>
            <div onClick={deleteGuitar}  className={style.confirm}>Yes</div>
            <div onClick={closeModal} className={style.cancel}>No</div>
            </div>

        </div>
    </div>
  )
}
