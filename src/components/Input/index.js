import React from "react";
import './input.css'
const Input = (props) => {
    const{ name, value, type, placeholder, onChange, classInput} = props
    return<>
    <input
            type = {type}
            value = {value}
            name = {name}
            placeholder= {placeholder}
            onChange={onChange}
            className={`input ${classInput}`}
            />
    </>
}
export default Input