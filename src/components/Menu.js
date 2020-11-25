import React from "react";
function Menu(props) {
  return (
    <header className="header">
      <div className="warp-header">
        <div className="container-menu">
          <div className="button-menu">
            <i className="fas fa-bars" />
          </div>
          <div className="logo">
            <img src="https://i.imgur.com/Pcvw3EJ.jpg" alt="NAL MEDIA"></img>
          </div>
        </div>
        <nav className="menu">
          <ul className="list-menu">
            <li className="list-item">
              <a href="#">オフショア開発</a>
            </li>
            <li className="list-item">
              <a href="#">NALブログ</a>
            </li>
            <li className="list-item">
              <a href="#">ベトナム情報</a>
            </li>
            <li className="list-item">
              <a href="#">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search-container">
        <div className="search">
          <div className="title-search">Find Our Serveres</div>
          <p>
            Chúng tôi là sự lựa chọn hàng đầu cho
            <br /> sản phẩm chất lượng
          </p>
          <form className="input-search">
            <input
              type="text"
              placeholder="Find Our Servies"
              className="searchf car-search"
            />
            <button type="submit" className="searchf button-search">
              Find Servies
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Menu;
