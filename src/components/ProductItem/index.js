import React from "react";
import { useNavigate } from "react-router-dom";
const ProductItem = (props) => {
  const {
    dataProduct: { imgProduct, titleItem, titlePrice },
  } = props;
  //  <Link  className="link-product-item" to={`/DetailProduct`}>  </Link>
  const navigate = useNavigate()
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return (

    <div className="product-item" onClick={() => navigate('/DetailProduct', { state: props.dataProduct })}>
      <img className="img-product" src={imgProduct} alt="" />
      <div className="product-item-text">
        <h4 className="title-item">{titleItem}</h4>
        <span className="price">{VND.format(titlePrice)}</span>
      </div>
    </div>

  );
};
export default ProductItem;
