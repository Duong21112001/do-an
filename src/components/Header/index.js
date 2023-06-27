import React from 'react'
import "./style.css"
function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="site-branding">
                        <div className="header-bar">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <a className="link-logo" href="">
                            <div className="header-logo">
                                <img className="logo-page" src="https://teddy.vn/wp-content/uploads/2023/03/logo-add-01gg-e1680256236315.png" alt="" />
                                <h2 className="title-page">Ôm là yêu</h2>
                            </div>
                        </a>

                        <div className="search">
                            <input className="int" type="text" placeholder="Nhập sản phẩm cần tìm" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div className="get-ifo">
                            <span className="show-user">nguyenanhduong</span>
                            <button className="btn btn-login" type="submit">Đăng nhập</button>
                        </div>
                    </div>
            <ul className='menu_list'>
                    <li className="menu-item">
                        <a className="link-menu-item" href="">
                            Trang chủ
                        </a>
                    </li>

                    <li className="menu-item">
                        <a className="link-menu-item" href="">
                            thú nhồi bông
                        </a>
                        <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu-high">
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">chó</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">mèo</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">thỏ</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">cá sấu</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">bò</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">cừu</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">voi</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">trà sữa</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">khủng long</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">kì lân</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a className="link-menu-item" href="">
                            gấu hoạt hình
                        </a>
                        <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu-high">
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">losto</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">among us</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">hello kitty</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">báo hồng</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">stich</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">cậu bé bút chì</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">doraemon</a>
                            </li>
                        </ul>
                    </li>
              
                    <li className="menu-item">
                        <a className="link-menu-item" href="">
                            gối bông
                        </a>
                        <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu-high">
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">gối ôm</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">gối cổ chữ u</a>
                            </li>
                            <li className="list-menu-high">
                                <a className="link-menu-high" href="">gối tựa lưng</a>
                            </li>
                        </ul>
                    </li>
               

                    <li className="menu-item">
                        <a className="link-menu-item" href="">
                            hàng mới về
                        </a>
                    </li>

            </ul>
                </div>
            </div>

        </header >

    )
}

export default Header