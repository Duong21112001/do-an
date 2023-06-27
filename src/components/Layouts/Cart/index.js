import React from "react";
import Input from '../../Input'
import './style.css'
import { v4 as uuidv4 } from "uuid";
import CartHeader from './CartHeader'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const ProductCart = JSON.parse(localStorage.getItem("listCart"))

  const [dataCart, setDataCart] = useState(ProductCart)
  const [totalPriceCart, setTotalPrice] = useState(0)
 useEffect(()=>{
  let totalPrice = 0
  ProductCart.forEach(item => {
    totalPrice += item.titlePrice * item.quantity
  })
  setTotalPrice(totalPrice)
 },[dataCart])

  
  const { id } = useParams()


  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart-content">
            <div className="cart-header">
              <label >
                <Input type='checkbox' />
                <span className="label">Tất cả sản phẩm</span>
              </label>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
              <span className=" remove remove-all">
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
            <div className="cart-product">
              {dataCart.map((item) => <CartHeader key={item.id} setDataCart={setDataCart} listCart={item} />)}
            </div>
            <div className="total-price-cart"><span>Tổng tiền giỏ hàng = {totalPriceCart}</span></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
