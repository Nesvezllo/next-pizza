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
                <button type='submit'><p>Выслать код</p></button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Auth