import logo from '/image/full-logo.svg'
import  basket from '/image/system-uicons_cart.png'
import user from '/image/Vector.png'
import favorite from '/image/ph_heart.png'
import './Header.css'
export default function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="nav">
                <a href="http://">Каталог</a>
                <a href="http://">Популярные товары</a>
                <a href="http://">Главная</a>
            </nav>
            <div className="icons">
                <a href=""><img src={basket} alt="" /></a>
                <a href=""><img src={favorite} alt="" /></a>
                <a href=""><img src={user} alt="" /></a>
            </div>
        </header>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                