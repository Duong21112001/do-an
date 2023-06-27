import React from 'react'
// import Header from "../component"
import './style.css'
function DetailProduct() {
  return (
   <>
 
   <div className='detail_product'>
        <div className='container'>
            <div className='detail_product_content'>
              <img className='img_detail' src='https://teddy.vn/wp-content/uploads/2021/10/gau-teddy-angel-hong-4.jpg'/>
              <div className='detail_product_text'>
              <h4 className="title-item detail">Heo sữa</h4>
            <span className="price">490.000đ</span>
            <button className='btn'>Thêm vào giỏ hàng</button>
            <button className='btn'>Mua hàng ngay</button>
              </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default DetailProduct