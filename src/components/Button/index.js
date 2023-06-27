import React from 'react'
import './button.css'
const Button = (props) => {
    const{title, addClass, onClick} = props
    return<>
    <button className={`btn ${addClass}`} onClick={onClick}>
        {title}
      </button>
    </>
}
export default Button