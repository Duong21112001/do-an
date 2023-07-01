import React, { useState, useEffect } from "react";
import Input from "../../Input";
import './style.css';
import CartHeader from './CartHeader';

const Cart = () => {
  const storedCart = JSON.parse(localStorage.getItem("listCart")) || [];

  const [dataCart, setDataCart] = useState(storedCart);
  const [totalPriceCart, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    dataCart.forEach(item => {
      totalPrice += item.titlePrice * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [dataCart]);

  const handleDeleteAll = () => {
    setDataCart([]);
    localStorage.removeItem("listCart");
    setTotalPrice(0);
  };

  const handleDeleteSelected = () => {
    const updatedCart = dataCart.filter(item => !item.isChecked);
    setDataCart(updatedCart);
    localStorage.setItem("listCart", JSON.stringify(updatedCart));
  };

  const handleCheckboxChange = (itemId, isChecked) => {
    const updatedCart = dataCart.map(item => {
      if (item.id === itemId) {
        return { ...item, isChecked };
      }
      return item;
    });
    setDataCart(updatedCart);
    localStorage.setItem("listCart", JSON.stringify(updatedCart));
  };

  const handleSelectAllChange = (isChecked) => {
    const updatedCart = dataCart.map(item => ({ ...item, isChecked }));
    setDataCart(updatedCart);
    localStorage.setItem("listCart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart">
      <div className="container">
        {dataCart.length ? (
          <div className="cart-content">
            <div className="cart-header">
              <label>
                <Input
                  type="checkbox"
                  onChange={(e) => handleSelectAllChange(e.target.checked)}
                />
                <span className="label">Tất cả sản phẩm</span>
              </label>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
              <span className="remove remove-all" onClick={handleDeleteAll}>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </div>
            <div className="cart-product">
              {dataCart.map(item => (
                <CartHeader
                  key={item.id}
                  setDataCart={setDataCart}
                  listCart={item}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
            <div className="total-price-cart">
              <span>Tổng tiền giỏ hàng = {totalPriceCart}</span>
            </div>
            {dataCart.some(item => item.isChecked) && (
              <button onClick={handleDeleteSelected}>Xóa đã chọn</button>
            )}
          </div>
        ) : (
          <div>Thêm sản phẩm vào giỏ hàng để mua hàng</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
