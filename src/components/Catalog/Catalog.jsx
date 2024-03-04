import Card from '../Card/Card'
import popul from '/image/Vector2.png'
import filter from '/image/solar_filter-linear.png'
import menu from '/image/menu.png'
import search from '/image/carbon_search.png'
import './Catalog.css'
import {mememe} from '../../data'

export default function Catalog(){
    return(
        <section className="catalog">
            <h1>Каталог</h1>
            <div className="catalog_filter">
                <img src={menu} alt="" />
                <div className="filter">
                    <img src={filter} />
                    <div className="popul">
                        <p>По популярности</p>
                        <img src={popul} alt="" />
                    </div>
                </div>
                <div className="search">
                    <p>Поиск</p>
                    <img src={search} alt="" />
                </div>
            </div>
            <div className="catalog_list">
                {mememe.map((mememe,index) =>(
                    <Card key={index} {...mememe}/>
                ))}
            </div>
            <div className="catalog_footer">
            </div>
        </section> 
    )
}