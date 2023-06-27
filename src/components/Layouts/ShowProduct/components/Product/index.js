import React from "react";



import ProductItem from "../../../../ProductItem";


function Product(props) {
const {dataProduct} = props

  return (
    <>
      <div className="product_main flex-wrap">
      {dataProduct.map((item) => {
          return <ProductItem key={item.id} dataProduct={item} />;
        })}
      </div>
    </>
  );
}

export default Product;
