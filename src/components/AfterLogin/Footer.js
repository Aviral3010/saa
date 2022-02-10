import React from 'react'
import Logo from "../../image/logo.png"
function Footer() {
    return (
        <div className='footer'>
        <footer >
            <h1>Copyright &copy; <img src={Logo} alt="" width="60" height="60" className="d-inline-block "/></h1>
        </footer>
        </div>
    )
}

export default Footer
