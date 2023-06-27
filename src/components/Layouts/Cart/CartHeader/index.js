import React, { useState, useEffect } from "react";
import Input from "../../../Input";
import Button from "../../../Button";
const CartHeader = (props) => {
  const {
    listCart: { id, imgProduct, quantity, titlePrice, titleItem }, setDataCart
  } = props;
  const [counter, setCounter] = useState(quantity);
  //tạo 1 state đê lưu tổng tiền 

  const [totalPrice, setTotalPrice] = useState(titlePrice)
  // tạo 1 useEffect để lắng nghe trang thái thay đổi quantity
  const productCart = JSON.parse(localStorage.getItem("listCart"))

  useEffect(() => {
    setTotalPrice(titlePrice * counter)
    // gán lại số lương khi tăng hoặc giảm số lượng sản phẩm trong cart
    const checkProduct = productCart.map(item => {
      if (item.id === id) {
        item.quantity = counter
      }
      return item
    })
    localStorage.setItem("listCart", JSON.stringify(productCart))
    setDataCart(productCart)
  }, [counter])


  const handleDeleteProductInCart = (id) => {
    const newListCart = productCart.filter((product) => product.id !== id)
    localStorage.setItem("listCart", JSON.stringify(newListCart))
    setDataCart(newListCart)
  }

  return (
    <>
      <div className="cart-item">
        <label className="pd-label">
          <Input type="checkbox" />
          <img className="img-cart" src={imgProduct} alt="" />
          <span className="label">{titleItem}</span>
        </label>

        <span>{titlePrice}</span>
        <div className="add_number">

          <Button
            title="-"
            addClass="btn-click"
            onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
          />
          <Input classInput="value" value={counter} />
          <Button
            title="+"
            addClass="btn-click"
            onClick={() => setCounter(counter + 1)}
          />
        </div>
        <span>{totalPrice} <span>đ</span> </span>
        <span className="remove" >
          <span onClick={() => handleDeleteProductInCart(id)}><i className="fa-solid fa-trash-can" ></i></span>
        </span>
      </div>
    </>
  );
};
export default CartHeader;
