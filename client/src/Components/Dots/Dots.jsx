import React, { useState, useEffect } from 'react'
import style from './Dots.module.scss';

export default function Dots( props ) {

    const [image, setImage] = useState(0);

    let images = props.images || [];

    useEffect(() => {
        const timer = setTimeout(() => {
            image === images.length - 1
            ? setImage(0)
            : setImage( image + 1 )

            props.imageNum(image)
        }, 5000)

        return() => clearTimeout(timer);
    }, [image])

  return (
    <div className={style.dots}>
        {
            images.map((item, index) =>
            <div
                className={ image === index ? style.selected : ''}
                key={index}
                onClick={ () => setImage(index, props.imageNum(index)) }
            >   
            </div>
        )}     
    </div>
  );
};
