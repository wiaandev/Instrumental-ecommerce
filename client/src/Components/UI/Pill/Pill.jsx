import React, {useState} from 'react';
import style from './Pill.module.scss';

export default function Pill(props) {

    // TODO: Fix class selection to remove class if new pill is selected

    const [isActive, setIsActive] = useState(false);

    const chooseOption = (e) => {
        setIsActive(current => !current);
    }

  return (
    <div className={isActive ? style.selected : style.container} onClick={chooseOption}>
        <p className={style.pBlue}>{props.text}</p>
    </div>
  )
}
