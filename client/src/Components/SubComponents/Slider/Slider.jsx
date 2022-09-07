import React, {useState, useEffect} from 'react';
import { sliderImages } from '../../sliderImages';
import style from './Slider.module.scss';
import Dots from '../../Dots/Dots';

export default function Slider() {


    const [ image, setImage ] = useState(0);
    const images = sliderImages;
    const img = images.map(item => item.url);
    const sliderText = images.map(item => item.text);
    const subText = images.map(item => item.subText);


    useEffect(() => {
      const timer = setTimeout(() => {
        image === img.length - 1 ? setImage(0) : setImage(image + 1)
      }, 5000);
    }, [sliderImages])

  return (
    <div className={style.sliderImageContainer} style={{ backgroundImage: `url(${img[image]})`}}>

        <div className={style.overlay}>
            <div className={style.sliderText}>
                <h2>{sliderText[image]}</h2>
                <h4>{subText[image]}</h4>
            </div>
            
            <div className={style.dotsCon}>
                <Dots
                    images={ sliderImages }
                    imageNum = {value => setImage(value)}
                />
            </div>


        </div>


    </div>
  )
}
