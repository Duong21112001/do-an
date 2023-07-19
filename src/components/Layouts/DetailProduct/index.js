import React, { useEffect, useState } from "react";
// import Header from "../component"
import "./style.css";
import DetailProductItem from './DetailProductItem'
import Button from "../../Button";
import Input from "../../Input";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login";
import { v4 as uuidv4 } from "uuid";

const DetailProduct = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [APILogin, setAPILogin] = useState([])
  const [counter, setCounter] = useState(1);

  const localStorages = useLocation()
  const product = localStorages.state
  const [activeLogin, setActiveLogin] = useState(false)
  const navigate = useNavigate()
  const [name, setName] = useState('')



  const changeNameUser = (e) => {
    setNameUser(e.target.value)
  }
  const getDataLogin = () => {
    fetch('https://649be5960480757192371734.mockapi.io/login', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setAPILogin(tasks)
    }).catch(error => {
      // handle error
    })
    setPhoneNumber("")
    setNameUser("")
    setPassword("")
  }
  const handleRegister = () => {
    console.log("đăng kí");
    const newTask = {
      idLogin: uuidv4(),
      name: nameUser,
      password: password,
      phoneNumber: phoneNumber,

    };
    fetch('https://649be5960480757192371734.mockapi.io/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // Send your data in the request body as JSON
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Đăng kí thành công")
      setNameUser("")
      setPassword("")
      setPhoneNumber("")
      setAPILogin([...APILogin, task])
    }).catch(error => {
      console.log(error)
    })
  }
  useEffect(() => {

    getDataLogin()
  }, [])

  const handleSubmit = () => {
    const data = APILogin

    const checkPhoneNumber = data.some(item => item.phoneNumber === phoneNumber)
    if (checkPhoneNumber) {
      const getUser = data.find(item => item.phoneNumber === phoneNumber)
      if (getUser.password === password) {
        alert("Đăng nhập thành công")
        setActiveLogin(false)
        setName(getUser.name)
        navigate("/")

      } else {
        alert("Sai mật khẩu")
      }
    } else {
      alert("Số điện thoại không tồn tại")
    }
  }
  const handleSetNumberToCart = (type) => {
    if (type === '+') {
      setCounter(counter + 1)
    } else {
      if (counter > 1) {
        setCounter(counter - 1)
      }
    }
  }
  // gọi xuống thằng mảng tên listcart nếu không tồn tại thì mảng rỗng
  // JSON.parse biến về giá trị mặc định của giá tị đó
  const dataCart = JSON.parse(localStorage.getItem('listCart') || '[]')
  const handleAddProductToCart = (product) => {
    console.log(product);
    // Check cart xem có tồn tài sản phẩm này hay chưa 
    const CheckProduct = dataCart.find(item => item.id === product.id)

    if (CheckProduct) {
      // có rồi thì cộng số lượng trong cart với số lượng ngoài product
      CheckProduct.quantity += counter
    } else {
      // chưa có thì thêm sản phẩm 
      const NewProduct = { ...product, quantity: counter }
      dataCart.push(NewProduct)
    }
    // gửi giá trị mới nhất lên local
    // JON.stringify => biến giá trị thành chuỗi 
    localStorage.setItem("listCart", JSON.stringify(dataCart))
  }
  const handleBuy = () => {
    const user = localStorage.getItem('name')
    if (!user) {
      alert("bạn phải đăng nhập để mua hàng")
      setActiveLogin(true)
    } else {
      console.log("mua hàng đi");
    }

  }
  const handleActive = (item) => {
    setActiveLogin(item)
  }
  return (
    <React.Fragment>
      {
        <div className="detail_product">
          {activeLogin ?
            <Login
              phoneNumber={phoneNumber}
              nameUser={nameUser}
              password={password}
              changePhoneNumber={(e) => setPhoneNumber(e.target.value)}
              changeNameUser={(e) => changeNameUser(e)}
              changePassword={(e) => setPassword(e.target.value)}
              handleRegister={handleRegister}
              handleSubmit={handleSubmit}
              onClick={(item) => handleActive(item)}

            />
            : null}
          <div className="container">
            <div className="detail_product_content">
              <img
                className="img_detail"
                src={product.imgProduct}
                alt="ảnh sản phẩm"
              />
              <div className="detail_product_text">
                <h4 className="title-item detail">{product.titleItem}</h4>
                <span className="price">{product.titlePrice}<span>đ</span></span>
                <div className="quantity">
                  <span className="quantity-text">Số lượng:</span>
                  <div className="add_number">
                    <Button title="+" addClass="btn-click" onClick={() => handleSetNumberToCart("+")} />
                    <Input classInput='value' value={counter} />
                    <Button title="-" addClass="btn-click" onClick={() => handleSetNumberToCart("-")} />
                  </div>
                </div>
                <div className="btn_group">
                  <Button title="Thêm vào giỏ hàng" addClass="btn-header" onClick={() => handleAddProductToCart(product)} />
                  <Button title="Mua ngay" onClick={handleBuy} addClass="btn-header" />
                  {/* <button className="btn_cart btn-add">Thêm vào giỏ hàng</button>
                    <button className="btn_cart">Mua ngay</button> */}
                </div>
                <ul className="reason">
                  <li className="item_reason">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-content">Giao Hàng Nội Thành Siêu Tốc - Giao Đúng Giờ & Tận Tay</span>
                  </li>
                  <li className="item_reason">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-content">Bảo Hành Đường Chỉ Vĩnh Viễn - Bảo Hành Bông Gấu 1 Năms</span>
                  </li>
                  <li className="item_reason">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-content"> Nhiều thịt, chống đùn</span>
                  </li>
                  <li className="item_reason">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-content">Da lộn trên bề mặt tinh tế và mềm mại, không dễ rụng lông</span>
                  </li>
                  <li className="item_reason">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-content"> Đa công dụng, có thể dùng làm gối nghỉ trưa, gối tựa lưng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
      <DetailProductItem img={product.imgProduct} />
    </React.Fragment>
  );
}

export default DetailProduct;