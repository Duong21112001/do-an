import React from "react";
import Comment from "../../Comment";

const DetailProductItem = ({ img }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="detail_product_item">
          <ul className="inf_product">
            <h4 className="title-item">Thông tin sản phẩm</h4>
            <li className="text-content">- Màu sắc: Màu hồng</li>
            <li className="text-content">- Chất liệu: Bông gòn</li>
            <li className="text-content">- Kích thước: 1m1</li>
          </ul>
          <ul className="discribe">
            <h4 className="title-item">Mô tả sản phẩm</h4>
            <li className="text-content">
              Gấu Bông Let's Bare Bear Fun Pose Miniso cute mềm mại chính hãng
              dùng làm quà tặng thì vô cùng hợp lí. Hoặc bạn có thể dùng để ôm,
              để trang trí cho căn phòng, góc làm việc học tập thêm xinh xắn nè.
            </li>
            <li className="text-content">
              Đặc điểm nổi bật:
              <ul className="text-content-list">
                <li className="text-content-item">
                  - Chất liệu cao cấp, mềm mại, an toàn cho mọi làn da.
                </li>
                <li className="text-content-item">
                  - Là món quà hoàn hảo cho mọi lứa tuổi.
                </li>
                <li className="text-content-item">
                  - Được sử dụng để trang trí phòng khách, phòng ngủ hoặc góc
                  họp tập, làm việc.
                </li>
              </ul>
            </li>
            <li className="text-content">
              Chú ý:
              <ul className="text-content-list">
                <li className="text-content-item">
                  - Không chạm vào vật liệu dễ cháy.
                </li>
                <li className="text-content-item">
                  - Không chạm vào dung môi hóa học.
                </li>
                <li className="text-content-item">
                  - Vệ sinh sản phẩm bằng giặt tay hay giặt máy đều được.
                </li>
                <li className="text-content-item">
                  - Vệ sinh sản phẩm nhẹ nhàng, không dùng chất tẩy rửa quá
                  mạnh.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="img-detail">
          <img
            className="img_detail_item"
            src={img}
          />
        </div>
        <Comment />
      </div>
    </React.Fragment>
  );
};
export default DetailProductItem;
