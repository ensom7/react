import Button from '../Button/Button'
import img from '/image/image.png'
import { mememe } from '/src/data.js'

import './Card.css'

export default function Card({title,price}){
    // alert(price)
    return(
        <div className="catalog_item">
            <img src={img} alt="" />
            <div className="car_title">
                {title}
            </div>
            <div className="card_price">
                {price}
            </div>
            <Button/>
        </div>
    )
}



