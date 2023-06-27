import React, { useEffect, useState } from "react";
// import Header from "../component"
import "./style.css";
import DetailProductItem from './DetailProductItem'
import Button from "../../Button";
import Input from "../../Input";
import { useParams } from "react-router-dom";
import { dataProduct } from "../../../dataProduct";


const DetailProduct = () => {
  const [counter, setCounter] = useState(1);
  
  const handleSetNumberToCart = ( type) => {
   
      if(type === '+'){
        setCounter(counter + 1)
      } else {
        if(counter > 1){
          setCounter(counter - 1)
        }
      }

  }
  
  const {id} = useParams()
 // gọi xuống thằng mảng tên listcart nếu không tồn tại thì mảng rỗng
 // JSON.parse biến về giá trị mặc định của giá tị đó
  const dataCart = JSON.parse(localStorage.getItem('listCart')|| '[]')
  const handleAddProductToCart=(product)=> {
    // Check cart xem có tồn tài sản phẩm này hay chưa 
    const CheckProduct = dataCart.find(item => item.id === product.id)

    if(CheckProduct){
      // có rồi thì cộng số lượng trong cart với số lượng ngoài product
      CheckProduct.quantity += counter
    }else {
      // chưa có thì thêm sản phẩm 
      const NewProduct = {...product , quantity:counter }
      dataCart.push(NewProduct)
    }
    // gửi giá trị mới nhất lên local
    // JON.stringify => biến giá trị thành chuỗi 
    localStorage.setItem("listCart", JSON.stringify(dataCart))
  }
  
  const newArr = dataProduct.find(item=>item.id === id)
  
  return (
    <>
      <div className="detail_product">
        <div className="container">
          <div className="detail_product_content">
            <img
              className="img_detail"
              src={newArr.imgProduct}
            />
            <div className="detail_product_text">
              <h4 className="title-item detail">{newArr.titleItem}</h4>
              <span className="price">{newArr.titlePrice}<span>đ</span></span>
              <div className="quantity">
                <span className="quantity-text">Số lượng:</span>
                <div className="add_number">
                <Button title="+" addClass="btn-click" onClick = {() => handleSetNumberToCart("+")}/>
                  <Input classInput='value' value={counter}/>
                  <Button title="-" addClass="btn-click" onClick = {() => handleSetNumberToCart("-")}/>
                </div>
              </div>
              <div className="btn_group">
              <Button title="Thêm vào giỏ hàng" addClass="btn-header" onClick={() => handleAddProductToCart(newArr)} />
              <Button title="Mua ngay" addClass="btn-header" />
                {/* <button className="btn_cart btn-add">Thêm vào giỏ hàng</button>
                <button className="btn_cart">Mua ngay</button> */}
              </div>
              <ul className="reason">
                <li className="item_reason">
                <i class="fa-solid fa-circle-check"></i>
                <span className="text-content">Giao Hàng Nội Thành Siêu Tốc - Giao Đúng Giờ & Tận Tay</span>
                </li>
                <li className="item_reason">
                <i class="fa-solid fa-circle-check"></i>
                <span className="text-content">Bảo Hành Đường Chỉ Vĩnh Viễn - Bảo Hành Bông Gấu 1 Năms</span>
                </li>
                <li className="item_reason">
                <i class="fa-solid fa-circle-check"></i>
                <span className="text-content"> Nhiều thịt, chống đùn</span>
                </li>
                <li className="item_reason">
                <i class="fa-solid fa-circle-check"></i>
                <span className="text-content">Da lộn trên bề mặt tinh tế và mềm mại, không dễ rụng lông</span>
                </li>
                <li className="item_reason">
                <i class="fa-solid fa-circle-check"></i>
                <span className="text-content"> Đa công dụng, có thể dùng làm gối nghỉ trưa, gối tựa lưng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DetailProductItem/>
    </>
  );
}

export default DetailProduct;
