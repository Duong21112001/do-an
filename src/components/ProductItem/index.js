import React from "react";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const {
    dataProduct: { imgProduct, titleItem, titlePrice ,id},
  } = props;
  return (
   
      <div className="product-item">
        <Link  className="link-product-item" to={`/DetailProduct/${id}`}>
          <img className="img-product" src={imgProduct} alt="" />
          <div className="product-item-text">
            <h4 className="title-item">{titleItem}</h4>
            <span className="price">{titlePrice}</span>
          </div>
        </Link>
      </div>
   
  );
};
export default ProductItem;
