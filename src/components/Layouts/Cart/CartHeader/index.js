import React, { useState, useEffect } from "react";
import Input from "../../../Input";
import Button from "../../../Button";

const CartHeader = (props) => {
  const {
    listCart: { id, imgProduct, quantity, titlePrice, titleItem },
    setDataCart,
    handleCheckboxChange,
    value
  } = props;

  const [counter, setCounter] = useState(quantity);
  const totalPrice = titlePrice * counter;

  useEffect(() => {
    const updatedCart = JSON.parse(localStorage.getItem("listCart")).map(
      (item) => (item.id === id ? { ...item, quantity: counter } : item)
    );
    localStorage.setItem("listCart", JSON.stringify(updatedCart));
    setDataCart(updatedCart);
  }, [counter]);

  const handleDeleteProductInCart = () => {
    const updatedCart = JSON.parse(localStorage.getItem("listCart")).filter(
      (product) => product.id !== id
    );
    localStorage.setItem("listCart", JSON.stringify(updatedCart));
    setDataCart(updatedCart);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="cart-item">
      <label className="pd-label">
        <Input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(id, e.target.checked)}
        />
        <img className="img-cart" src={imgProduct} alt="" />
        <span className="label">{titleItem}</span>
      </label>

      <span>{titlePrice}</span>
      <div className="add_number">
        <Button title="-" addClass="btn-click" onClick={decrementCounter} />
        <Input classInput="value" value={counter} />
        <Button title="+" addClass="btn-click" onClick={incrementCounter} />
      </div>
      <span>
        {totalPrice} <span>đ</span>{" "}
      </span>
      <span className="remove">
        <span onClick={handleDeleteProductInCart}>
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </span>
    </div>
  );
};

export default CartHeader;
