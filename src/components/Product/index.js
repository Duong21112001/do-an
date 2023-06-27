import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import ProductList from './ProductList'
const Product = () => {
 const productType = [
    //map ra các loại mặt hàng
     {id:uuidv4(), title:"Hàng mới về"},
    {id:uuidv4(), title:"Thú nhồi bông"},
    {id:uuidv4(), title:"Gấu hoạt hình"},
    {id:uuidv4(), title:"Gối bông"},

 ]
  
 
  return (
    <div className="product">
      <div className="container">
        <div className="product-content">
         {productType.map(item=><ProductList key={item.id} dataType={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Product;
