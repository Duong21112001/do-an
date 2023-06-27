import React from 'react'
import Button from '../../Button'

const Comment = () => {
    return<>
       <div className="comment">
        <div className="container">
          <div className="comment-content">
            <span className="link-menu-item">Bình luận</span>
            <div className="local-comment">
              <textarea className="local-ipn" placeholder="Nội dung bình luân(*)"/>
              <Button title="Gửi" addClass="btn-header" />
            </div>
          </div>
        </div>
      </div></>
}
export default Comment