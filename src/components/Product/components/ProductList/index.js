import React from "react";
import ProductItem from "../ProductItem";
import { v4 as uuidv4 } from "uuid";

function ProductList(props) {
    const dataProduct = [
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Thú nhồi bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gấu hoạt hình",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Gối bông",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
        {
          id: uuidv4(),
          imgProduct:
            "https://i.pinimg.com/564x/af/9d/a4/af9da4af82e6bfae561daa4fdb7c6711.jpg",
          titleProduct: "Hàng mới về",
          titleItem: "Chó bông husky 75cm",
          titlePrice: "490.000đ",
        },
      ];
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
        const random = newDataP[Math.floor(Math.random() * newDataP.length)];
        // tạo ra 1 mảng có 4 sản phẩm ngẫu nhiên và retun ra mảng đó
        const arrRandom = [random, random, random, random];
        return arrRandom;
      };
      const{dataType:{title}} = props
  return (
    <>
      <a className="link-title-product" href="">
        <h3 className="title-product">{title}</h3>
      </a>
      <div className="product_main">
        {randomProduct(dataProduct, title).map((item) => {
          return <ProductItem key={item.id} dataProduct={item} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
