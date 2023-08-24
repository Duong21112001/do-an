import React, { useState } from 'react'
import Button from '../../Button'
const Comment = () => {
  return (
  <div className="comment">
    <div className="container">
      <div className="comment-content">
        <div className='comment-user'></div>
        <span className="link-menu-item">Bình luận</span>
        <div className="local-comment">
          <textarea  className="local-ipn" placeholder="Nội dung bình luân(*)" />
          <Button onClick={()=> alert('Cảm ơn bạn đã để lại bình luận')}  title="Gửi" addClass="btn-header" />
        </div>
      </div>
    </div>
  </div>)
}
export default Comment