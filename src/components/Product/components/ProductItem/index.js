import React from "react";
const ProductItem = (props) => {
  const {
    dataProduct: { imgProduct, titleItem, titlePrice ,id},
  } = props;
  console.log(imgProduct);
  return (
    <div>
      <div className="product-item">
        <a className="link-product-item" href={`/chitietsanpham?${id}`}>
          <img className="img-product" src={imgProduct} alt="" />
          <div className="product-item-text">
            <h4 className="title-item">{titleItem}</h4>
            <span className="price">{titlePrice}</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProductItem;
