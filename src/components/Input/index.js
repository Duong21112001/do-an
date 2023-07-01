import React from "react";
import './input.css'
const Input = (props) => {
    const { name, value, type, placeholder, onChange, classInput } = props
    return (

        <React.Fragment>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`input ${classInput}`}
            />
        </React.Fragment>
    )
}
export default Input