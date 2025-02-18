import React from 'react'


const HeaderLogin = () => {
  return (
    <div class="login-input">
    <input type="text" id="email" placeholder="E-mail"></input>
    <input type="password" id="password" placeholder="Password"></input>
    <button type="submit" class="btn">Login</button>
    <button type="submit" class="btn">Sign-Up</button>
    </div>
  )
}

export default HeaderLogin
