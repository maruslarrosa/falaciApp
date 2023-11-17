import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import milei from '../assets/img/milei.jpg';


export const Img = () => {
    const playing = useSelector((state) => state.audio.playing);

    return (
        <img src={milei} alt='Imagen de milei con una maza' className={playing ? 'flip-img-animation' : ''} />
    )
}