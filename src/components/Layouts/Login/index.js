import React, { useState, useEffect } from 'react'
import './style.css'
import Input from '../../Input'
import Button from '../../Button'
import { Link } from "react-router-dom";
function Login(props) {
  const {
    onClick,
    handleSubmit,
    handleRegister,
    phoneNumber,
    changePhoneNumber,
    changeNameUser,
    password,
    nameUser,
    changePassword
  } = props
  const [isCheckLogin, setIsCheckLogin] = useState(true)


  return (

    <div className='login ' >
      <div className='bg-login' onClick={() => onClick(false)}></div>
      <div className='container style-login'>
        <div className='login-content'>
          {isCheckLogin ?
            (<div className='login-left'>
              <h2 className='title-login'>Xin chào,</h2>
              <span className='des'>Đăng nhập hoặc tạo tài khoản</span>
              <Input onChange={changePhoneNumber} classInput='input_login' value={phoneNumber} placeholder='Số điện thoại' />
              <Input classInput='input_login' type='password' onChange={changePassword} placeholder='Mật khẩu' value={password} />
              <Button addClass='btn-login' onClick={handleSubmit} title='Tiếp tục' />

              <Link className='link-email' to ="/">Bạn quên mật khẩu?</Link>
              <div className='login-hr'>
                <hr className='hr-login' />
                <span className='opacity-sp'>Hoặc tiếp tục bằng</span>
                <hr className='hr-login' />
              </div>
              <div className='login-social'>
                <img className='link-login' src='https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png' />
                <img className='link-login' src='https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png' />
              </div>
            </div>)
            :
            (
              // Đăng kýyyyyyyyyyyyyyyyyyyyyyyyyy
              <div className='login-left'>
                <h2 className='title-login'>Xin chào,</h2>
                <span className='des'>Đăng nhập hoặc tạo tài khoản</span>
                <Input onChange={changeNameUser} classInput='input_login' value={nameUser} placeholder='Tên đăng nhập' />
                <Input onChange={changePhoneNumber} type={Number} classInput='input_login' value={phoneNumber} placeholder='Số điện thoại' />
                <Input classInput='input_login' type='password' onChange={changePassword} placeholder='Mật khẩu' value={password} />
                {/* <Input classInput='input_login' type={password} onChange={changePassword2} placeholder='Nhập lại mật khẩuMật khẩu' value={password2} /> */}
                <Button addClass='btn-login' onClick={handleRegister} title='Tiếp tục' />

                <a className='link-email' href=''>Đăng nhập bằng Email</a>
                <div className='login-hr'>
                  <hr className='hr-login' />
                  <span className='opacity-sp'>Hoặc tiếp tục bằng</span>
                  <hr className='hr-login' />
                </div>
                <div className='login-social'>
                  <img className='link-login' src='https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png' />
                  <img className='link-login' src='https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png' />
                </div>
              </div>)
          }
          <div className='login-right'>
            <img className='img-register' src='https://teddy.vn/wp-content/uploads/2021/12/unicorn-theu-hoa.jpg' />
            {isCheckLogin ?
              <Button onClick={() => setIsCheckLogin(false)} addClass='btn-register' title='Đăng kí' />
              :
              <Button onClick={() => setIsCheckLogin(true)} addClass='btn-register' title='Đăng Nhập' />
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login