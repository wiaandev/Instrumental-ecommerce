import React, {useState} from 'react';
import style from './ColorPicker.module.scss';

export default function ColorPicker() {

    const [isActive, setIsActive] = useState(false);

    const chooseOption = (e) => {
        setIsActive(current => !current);
    }

  return (
    <div className={isActive ? style.selected : style.container} onClick={chooseOption}>

    </div>
  )
}
