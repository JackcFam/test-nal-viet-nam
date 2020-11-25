import React,{useState} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
function Header(props) {
const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <header className="header">
      <div className="warp-header">
        <div className="container-menu">
          <div
            className="button-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i className="fas fa-bars" />
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              
            </MenuItem>
            <MenuItem onClick={handleClose}>

            </MenuItem>
            <MenuItem onClick={handleClose}>

            </MenuItem>
          </Menu>
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

export default Header;
