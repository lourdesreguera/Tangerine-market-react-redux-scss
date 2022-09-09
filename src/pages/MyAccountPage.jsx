import React from 'react'

const MyAccountPage = () => {
  return (
    <main className='my-account'>
        <h1 className='formPage__heading'>¡Hola, Juan!</h1>
        <div className='my-account__container'>
            <div className='my-account__container--left'>
                <h2 className='my-account__subheading'>Tus datos</h2>
                <ul className='my-account__data'>
                    <li>Nombre:</li>
                    <li>Apellidos:</li>
                    <li>Teléfono:</li>
                    <li>Email:</li>
                </ul>
            </div>
            <button className='login-btn login-btn--my-account'>¿Tienes un comercio? Date de alta gratis</button>
        </div>
    </main>
  )
}

export default MyAccountPage
