import React from "react";
import ProductItem from "./../../ProductItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { dataProduct } from "../../../dataProduct";
function ProductList(props) {
  
    //   hàm để random ra 1 arr chứ 4 sản phẩm 
    // Hàm có 2 tham số
    // tham số 1 là mảng sản phầm
    // tham số 2 là loại sản phẩm
      const randomProduct = (arr, titleProductType) => {
        // lọc ra các sản phẩm có loại phẩm = titleProductType
        const newDataP = arr.filter(
          (item) => item.titleProduct === titleProductType
        );
        // lấy ra 1 sản phẩm ngẫu nhiên trong mảng newDataP
        // tạo ra 1 mảng có 4 sản phẩm ngẫu nhiên và retun ra mảng đó
        return  newDataP.filter((item,i)=> i<4)
       
        
      };
      const{dataType:{title}} = props
  return (
    <>
      <Link  className="link-title-product" to={`ShowProduct`}>
        <h3 className="title-product">{title}</h3>
      </Link>
      <div className="product_main">
        {randomProduct(dataProduct, title).map((item) => {
          return <ProductItem key={item.id} dataProduct={item} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
