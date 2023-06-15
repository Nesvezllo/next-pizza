import React, { use, useEffect } from 'react'

const Auth = () => {

  return (
    <div className="auth_wrapper">
        <div className='auth_container'>
        <h1>Авторизация</h1>
        <form className='auth_form'>
            <div className='form_content'>
                <div className='input_block'>
                    <p>Номер телефона</p>
                    <input type="text" id="phone" name="phone" pattern='^ [ \+ ] ? [(] ? [0 - 9] {3} [)] ? [- \с \. ] ? [0 - 9] {3} [- \s \. ] ? [0 - 9] {4,6} $'/>
                </div>
                <div className='input_block'>
                    <p>Имя</p>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className='input_block'>
                    <p>Адрес</p>
                    <input type="text" id="address" name="address"/>
                </div>
                <div className='input_block'>
                    <p>Номер дома</p>
                    <input type="text" id="home_num" name="home_num"/>
                </div>
                <button type='button'><p>Выслать код</p></button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Auth