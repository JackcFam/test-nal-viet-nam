import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="subcriebs">
        <div className="title-sub">
          <p>Never Miss A Message</p>
          <p>Join our exclusive list for one off deals and more</p>
        </div>
        <form action className="form-email">
          <input type="text" placeholder="Enter your email address.." />
          <button type="submit">Registration</button>
        </form>
      </div>
      <div className="end-footer">
        <div className="footer-end-one">
          <div className="logo-footer-main">
            <img
              src="https://i.imgur.com/Pcvw3EJ.jpg"
              className="logo-footer"
              alt="logo-NAL"
            />
          </div>
          <ul className="list-footer">
            <li className="items">
              <a href="#">住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam</a>
            </li>
            <li className="items">
              <a href="#">電話番号：(+84)243-787-8654</a>
            </li>
            <li className="items">
              <a href="#">メールアドレス：info@nal.vn</a>
            </li>
          </ul>
        </div>
        <div className="link-fast">
          <p className="title-footer-end">高速リンク</p>
          <ul className="list-footer">
            <li className="items">
              <a href="#">‘オフショア開発’</a>
            </li>
            <li className="items">
              <a href="#">‘NALブログ’</a>
            </li>
            <li className="items">
              <a href="#">‘ベトナム情報’</a>
            </li>
            <li className="items">
              <a href="#">‘お問い合わせ’</a>
            </li>
          </ul>
        </div>
        <div className="right-footer">
          <p className="title-footer-end">カスタマーケア</p>
          <ul className="list-footer">
            <li className="items">
              <a href="#">個人情報保護方針</a>
            </li>
            <li className="items">
              <a href="#">ソフトウェアコンサルティング</a>
            </li>
            <li className="items">
              <a href="#">保証ポリシー</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
