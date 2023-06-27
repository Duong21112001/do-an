import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import Login from "../Layouts/Login";
import { useNavigate } from 'react-router-dom'

function Header() {
  var Nav = document.querySelector("nav")
  const [nav, newNav] = useState("")
  const [activeLogin, setActiveLogin] = useState(false)
  const [activeItem, setActiveItem] = useState(1)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [APILogin, setAPILogin] = useState([])
  const navigate = useNavigate()
  const getDataLogin = () => {
    fetch('https://647c676fc0bae2880ad0a7a8.mockapi.io/login', {
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
  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name])
  useEffect(() => {
    getDataLogin()
  }, [])
  const handleSubmit = (phoneNumber, password) => {
    const data = APILogin
    const checkPhoneNumber = data.some(item => item.sdt === phoneNumber)
    if (checkPhoneNumber) {


      const getUser = data.find(item => item.sdt === phoneNumber)
      console.log(getUser);

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
  window.addEventListener("scroll", function () {
    const valueScroll = window.scrollY
    if (valueScroll > 100) {
      newNav("nav-bar")
    } else {
      newNav("")
    }
  })
  const handleActive = (item) => {
    setActiveLogin(item)

  }
  const handleHederActive = (id) => {
    setActiveItem(id)
  }
  const handleLogout = () => {
    setName("");
    console.log("logout");
    localStorage.removeItem("name")
  }
  const handleRegister = (nameUser, password, phoneNumber) => {
    const newTask = {
      name: nameUser,
      password: password,
      sdt: phoneNumber
    };
    fetch('https://647c676fc0bae2880ad0a7a8.mockapi.io/login', {
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
      console.log(task);
      setAPILogin([...APILogin, task])
    }).catch(error => {
      // handle error
    })


  }
  const changeNameUser =(e)=>{
    setNameUser(e.target.value)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="site-branding">
            <div className="header-bar">
              <i className="fa-solid fa-bars"></i>
            </div>
            <Link className="link-logo" to="/">
              <div className="header-logo">
                <img
                  className="logo-page"
                  src="https://teddy.vn/wp-content/uploads/2023/03/logo-add-01gg-e1680256236315.png"
                  alt=""
                />
                <h2 className="title-page">Ôm là yêu</h2>
              </div>
            </Link>

            <div className="search">
              <input
                className="int"
                type="text"
                placeholder="Nhập sản phẩm cần tìm"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to={`cart`}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="get-ifo">
              <span className="show-user">{name ? name : "Login để mua hàng"}</span>

              {name ? <Button addClass="btn-header" onClick={handleLogout} title="Đăng xuất" /> : <Button title="Đăng nhập" addClass="btn-header" onClick={() => setActiveLogin(true)} />}


            </div>
          </div>
          <nav className={nav}>
            <ul className="menu_list">
              <li className={`menu-item ${activeItem === 1 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(1)}>
                <Link className="link-menu-item" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className={`menu-item ${activeItem === 2 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(2)}>
                <Link className="link-menu-item" to="/ShowProduct">
                  Tất cả sản phẩm
                </Link>
              </li>
              <li className={`menu-item ${activeItem === 3 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(3)}>
                <Link className="link-menu-item" to="/ShowProduct/thu-nhoi-bong">
                  thú nhồi bông
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      chó
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      mèo
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      thỏ
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      cá sấu
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      bò
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      cừu
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      voi
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      trà sữa
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      khủng long
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      kì lân
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`menu-item ${activeItem === 4 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(4)}>
                <Link className="link-menu-item" to="/ShowProduct/gau-hoat-hinh">
                  gấu hoạt hình
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      losto
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      among us
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      hello kitty
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      báo hồng
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      stich
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      cậu bé bút chì
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      doraemon
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`menu-item ${activeItem === 5 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(5)}>
                <Link className="link-menu-item" to="/ShowProduct/goi-bong">
                  gối bông
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      gối ôm
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      gối cổ chữ u
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      gối tựa lưng
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={`menu-item ${activeItem === 6 ? "activeClick" : ""} `}
                onClick={() => handleHederActive(6)}>
                <Link className="link-menu-item" to="/ShowProduct/hang-moi-ve">
                  hàng mới về
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {activeLogin ?
        <Login
          phoneNumber={phoneNumber}
          nameUser={nameUser}
          password={password}
          changePhoneNumber={(e)=> setPhoneNumber(e.target.value)  }
          changeNameUser={(e)=> changeNameUser(e) }
          changePassword={ (e)=>setPassword(e.target.value)}
          handleRegister={() => handleRegister}
          handleSubmit={() => handleSubmit()}
          onClick={(item) => handleActive(item)} />
        : null}

    </header>
  );
}

export default Header;
