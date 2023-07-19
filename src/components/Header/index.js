import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import Login from "../Layouts/Login";
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import { removeAscent } from "../../ulit";

const Header = () => {
  const [nav, setNav] = useState("");
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [APILogin, setAPILogin] = useState([]);
  const [APIProduct, setAPIProduct] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [tokens, setTokens] = useState({});
  const navigate = useNavigate();

  const STORAGE_KEY_NAME = "name";
  const STORAGE_KEY_TOKENS = "tokens";

  const getDataProduct = async () => {
    try {
      const res = await fetch('https://649be5960480757192371734.mockapi.io/product', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      if (res.ok) {
        const tasks = await res.json();
        setAPIProduct(tasks);
      } else {
        throw new Error('Error fetching product data');
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDataLogin = async () => {
    try {
      const res = await fetch('https://649be5960480757192371734.mockapi.io/login', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      if (res.ok) {
        const tasks = await res.json();
        setAPILogin(tasks);
      } else {
        throw new Error('Error fetching login data');
      }
    } catch (error) {
      console.log("error", error);
    }
    setPhoneNumber("");
    setNameUser("");
    setPassword("");
  };

  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem(STORAGE_KEY_NAME));
    if (storedName) {
      setName(storedName);
    }
    const storedTokens = JSON.parse(localStorage.getItem(STORAGE_KEY_TOKENS));
    if (storedTokens) {
      setTokens(storedTokens);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(name));
    localStorage.setItem(STORAGE_KEY_TOKENS, JSON.stringify(tokens));
  }, [name, tokens]);

  useEffect(() => {
    getDataProduct();
    getDataLogin();
  }, []);

  const handleLogout = () => {
    setName("");
    setTokens({});
    localStorage.removeItem(STORAGE_KEY_NAME);
    localStorage.removeItem(STORAGE_KEY_TOKENS);
  };

  const handleSubmit = () => {
    const data = APILogin;
    const checkPhoneNumber = data.some(item => item.phoneNumber === phoneNumber);
    if (checkPhoneNumber) {
      const getUser = data.find(item => item.phoneNumber === phoneNumber);
      if (getUser.password === password) {
        alert("Đăng nhập thành công");
        setActiveLogin(false);
        setName(getUser.name);
        setTokens(getUser);
        navigate("/");
      } else {
        alert("Sai mật khẩu");
      }
    } else {
      alert("Số điện thoại không tồn tại");
    }
  };

  const handleScroll = () => {
    const valueScroll = window.scrollY;
    setNav(valueScroll > 100 ? "nav-bar" : "");
  };

  const handleActive = (item) => {
    setActiveLogin(item);
  };

  const handleHeaderActive = (id) => {
    setActiveItem(id);
  };

  const handleRegister = () => {
    const newTask = {
      name_user: nameUser,
      password: password,
      phone_number: phoneNumber,
      id_login: uuidv4(),
    };
    fetch('https://649be5960480757192371734.mockapi.io/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error registering user');
      }
    }).then(task => {
      alert("Đăng kí thành công");
      setNameUser("");
      setPassword("");
      setPhoneNumber("");
      setAPILogin([...APILogin, task]);
    }).catch(error => {
      console.log(error);
    });
  };

  const handleChangeNameUser = (e) => {
    setNameUser(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setDataProduct(APIProduct.filter(item => {
      const searchTerm = removeAscent(search).trim().toLowerCase();
      const titleItem = removeAscent(item.titleItem).trim().toLowerCase();
      return titleItem.includes(searchTerm);
    }));
  }, [search, APIProduct]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                <h2 className="title-page">Ôm là yêu</h2>
              </div>
            </Link>
            <div className="search">
              <input
                className="int"
                value={search}
                type="text"
                placeholder="Nhập sản phẩm cần tìm"
                onChange={handleSearch}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
              {search && (
                <div className="list_search">
                  <ul className="list_search-ul">
                    {dataProduct.map(item =>
                      <li key={item.idProduct} onClick={() => navigate("/DetailProduct", { state: item })} className="list_search-li">{item.titleItem}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <Link to='/cart' onClick={() => setActiveItem(0)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="get-ifo">
              <span className="show-user">{name ? name : "Login để mua hàng"}</span>
              {name ? (
                <Button addClass="btn-header" onClick={handleLogout} title="Đăng xuất" />
              ) : (
                <Button title="Đăng nhập" addClass="btn-header" onClick={() => setActiveLogin(true)} />
              )}
            </div>
          </div>
          <nav className={nav}>
            <ul className="menu_list">
              <li className={`menu-item ${activeItem === 1 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(1)}>
                <Link className="link-menu-item" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className={`menu-item ${activeItem === 2 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(2)}>
                <Link className="link-menu-item" to="/ShowProduct">
                  Tất cả sản phẩm
                </Link>
              </li>
              <li className={`menu-item ${activeItem === 3 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(3)}>
                <Link className="link-menu-item" to={`/ShowProduct/${encodeURIComponent("thú nhồi bông")}`}>
                  Thú nhồi bông
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Chó
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Mèo
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Thỏ
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Cá sấu
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Bò
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Cừu
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Voi
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Trà sữa
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Khủng long
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Kỳ lân
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`menu-item ${activeItem === 4 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(4)}>
                <Link className="link-menu-item" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                  Gấu hoạt hình
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Losto
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Among Us
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Hello Kitty
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Báo hồng
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Stitch
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("thú nhồi bông")}`}>
                      Cậu bé bút chì
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to={`/ShowProduct/${encodeURIComponent("gấu hoạt hình")}`}>
                      Doraemon
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`menu-item ${activeItem === 5 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(5)}>
                <Link className="link-menu-item" to={`/ShowProduct/${encodeURIComponent("gối bông")}`}>
                  Gối bông
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="menu-high">
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Gối ôm
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Gối cổ chữ U
                    </Link>
                  </li>
                  <li className="list-menu-high">
                    <Link className="link-menu-high" to="/">
                      Gối tựa lưng
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`menu-item ${activeItem === 6 ? "activeClick" : ""} `}
                onClick={() => handleHeaderActive(6)}>
                <Link className="link-menu-item" to={`/ShowProduct/${encodeURIComponent("hàng mới về")}`}>
                  Hàng mới về
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {activeLogin && (
        <Login
          phoneNumber={phoneNumber}
          nameUser={nameUser}
          password={password}
          changePhoneNumber={(e) => setPhoneNumber(e.target.value)}
          changeNameUser={(e) => handleChangeNameUser(e)}
          changePassword={(e) => setPassword(e.target.value)}
          handleRegister={handleRegister}
          handleSubmit={handleSubmit}
          onClick={(item) => handleActive(item)}
        />
      )}
    </header>
  );
};

export default Header;
