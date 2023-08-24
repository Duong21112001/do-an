import React, { useState, useEffect } from "react";
import Input from "../../Input";
import './style.css';
import CartHeader from './CartHeader';
import Button from "../../Button";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "listCart";

const Cart = () => {
  const [values, setValue] = useState({
    username: "",
    address: "",
    phoneNumber: ""
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate();

  const [dataCart, setDataCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return storedCart;
  });

  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataCart));
  }, [dataCart]);

  useEffect(() => {
    // Update the checked items state whenever dataCart changes
    const updatedCheckedItems = dataCart.reduce((checkedItems, item) => {
      checkedItems[item.idProduct] = item.isChecked;
      return checkedItems;
    }, {});
    setCheckedItems(updatedCheckedItems);
  }, [dataCart]);

  const totalPriceCart = dataCart.reduce((totalPrice, item) => {
    if (checkedItems[item.idProduct]) {
      return totalPrice + item.titlePrice * item.quantity;
    }
    return totalPrice;
  }, 0);

  const handleDeleteAll = () => {
    setDataCart([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleDeleteSelected = () => {
    const updatedCart = dataCart.filter(item => !item.isChecked);
    setDataCart(updatedCart);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCart));
  };

  const handleBuy = () => {
    const listCart = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const newTask = {
      name: values.username,
      phoneNumber: values.phoneNumber,
      address: values.address,
      idBuy: uuidv4(),

      product: listCart,
      key: uuidv4(),
    };
    fetch('https://647c676fc0bae2880ad0a7a8.mockapi.io/databuy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Error: ' + res.status);
      })
      .then(task => {
        alert('Mua hàng thành công');
        setIsFormVisible(false);
        localStorage.clear('listCart'); // Hide the form after successful purchase
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCheckboxChange = (itemId, isChecked) => {
    console.log(itemId);
    console.log(isChecked);
    setDataCart(prevDataCart => {
      const updatedCart = prevDataCart.map(item => {
        if (item.idProduct === itemId) {
          return { ...item, isChecked };
        }
        return item;
      });
      return updatedCart;
    });
  };


  const handleSelectAllChange = (isChecked) => {
    const updatedCart = dataCart.map(item => ({ ...item, isChecked }));
    setDataCart(updatedCart);
  };


  const handleCheckout = () => {
    setIsFormVisible(true);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    setValue({
      ...values,
      [name]: value
    });
  };
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <div className="cart">
      {dataCart.length ? (
        <div className="container">
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
                  key={item.idProduct}
                  setDataCart={setDataCart}
                  listCart={item}
                  handleCheckboxChange={ handleCheckboxChange}
                />
              ))}

            </div>
            <div className="total-price-cart">
              {dataCart.some(item => item.isChecked) && (
                <Button addClass="btn-delete" title="Xóa đã chọn" onClick={handleDeleteSelected} />
              )}
              <span className="span-total">Tổng tiền giỏ hàng = {VND.format(totalPriceCart)}</span>
              <button className="btn-buy" onClick={handleCheckout}>
                Thanh toán
              </button>
            </div>
          </div>
          {isFormVisible && (
            <div className="checkout-form">
              <h2>Thông tin đặt hàng</h2>
              <div className="form-group">
                <label>Họ tên</label>
                <input onChange={handleChangeValue} name="username" value={values.username} type="text" placeholder="Nhập họ tên của bạn" />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <input onChange={handleChangeValue} name="address" value={values.address} type="text" placeholder="Nhập địa chỉ của bạn" />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input onChange={handleChangeValue} name="phoneNumber" value={values.phoneNumber} type="tel" placeholder="Nhập số điện thoại của bạn" />
              </div>
              <button onClick={handleBuy}>Xác nhận đơn hàng</button>
            </div>
          )}
        </div>
      ) : (
        <div className="container">
          <div className="empty-cart">
            <h2>Giỏ hàng trống</h2>
            <p>Thêm sản phẩm vào giỏ hàng để mua hàng</p>
            <Button title="Tiếp tục mua hàng" onClick={() => navigate('/')} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;