import React, { useEffect, useState } from "react";
import ProductItem from "./../../ProductItem";
import { Link } from "react-router-dom";

function ProductList(props) {
  const [dataProduct, setDataProduct] = useState([])
  const { dataType: { title } } = props
  const getDataProduct = () => {
    fetch('https://649be5960480757192371734.mockapi.io/product', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

    }).then(tasks => {
      setDataProduct(tasks)
    }).catch(error => {
      console.log("error", error);
    })
  }
  useEffect(() => {
    getDataProduct()
  }, [])

  //   hàm để random ra 1 arr chứ 4 sản phẩm 
  // Hàm có 2 tham số
  // tham số 1 là mảng sản phầm
  // tham số 2 là loại sản phẩm
  const randomProduct = (arr, titleProductType) => {
    // lọc ra các sản phẩm có loại phẩm = titleProductType
    const newDataP = arr.filter((item) =>
      item.titleProduct === titleProductType.toLowerCase()
    );

    // lấy ra 1 sản phẩm ngẫu nhiên trong mảng newDataP
    // tạo ra 1 mảng có 4 sản phẩm ngẫu nhiên và retun ra mảng đó
    return newDataP.filter((item, i) => i < 4)
  };
  return (
    <React.Fragment>
      <Link className="link-title-product" to={`ShowProduct`}>
        <h3 className="title-product">{title}</h3>
      </Link>
      <div className="product_main">
        {randomProduct(dataProduct, title).map((item) =>
          <ProductItem key={item.idProduct} dataProduct={item} />)}
      </div>
    </React.Fragment>
  );
}

export default ProductList;
