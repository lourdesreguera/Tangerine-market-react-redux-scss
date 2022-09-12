import React from 'react'

const NavbarMobile = () => {
  return (
    <div className='NavbarMobile-container'>
        <div className='NavbarMobile-container__item'>
        <div className='NavbarMobile-image'>
            <img src="./images/home-black-mobile.png" alt=""/>
        </div>
            <h4 className='NavbarMobile-text'>HOME</h4>
        </div>
        <div className='NavbarMobile-container__item'>
            <div className='NavbarMobile-image'>
                <img src="./images/shop-black-mobile.png" alt=""/>
            </div>
            <h4 className='NavbarMobile-text'>SHOP</h4>
        </div>
        <div className='NavbarMobile-containe__item'>
            <div className='NavbarMobile-image'>
                <img src="./images/account-black-mobile.png" alt=""/>
            </div>
            <h4 className='NavbarMobile-text'>CUENTA</h4>
        </div>
        <div className='NavbarMobile-container__item'>
            <div className='NavbarMobile-image'>
                <img src="./images/shopping-cart-black-mobile.png" alt=""/>
            </div>
            <h4 className='NavbarMobile-text'>CARRITO</h4>
        </div>  
    </div>
  )
}

export default NavbarMobile