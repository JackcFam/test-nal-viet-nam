import React,{ useState} from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
function Footer(props) {
  const [heart, setHeart] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values, e) => {
    e.target.reset();
    console.log(values);
    setHeart(true);
    getHeart();
  };

  const getHeart = () => {
    setTimeout(() => {
      setHeart(false);
    }, 650);
  };
  return (
    <>
      <footer className="footer" onSubmit={handleSubmit(onSubmit)}>
        <div className="subcriebs">
          <div className="title-sub">
            <p>Never Miss A Message</p>
            <p>Join our exclusive list for one off deals and more</p>
          </div>
          <form action className="form-email">
            <input
              type="text"
              placeholder="Enter your email address.."
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            <button type="submit">Registration</button>
          </form>

          <div className="container-errors">
            {errors.email?.type === "required" && (
              <p className="errors">Email không được bỏ trống</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errors">Email không đúng định dạng</p>
            )}
          </div>
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
      <Modal
        className="modal d-flex justify-content-center modal-selecter"
        show={heart}
        animation={true}
      >
        <div className="modal-content-alert">
          <div className="d-flex justify-content-center my-3">
            <img
              src="https://img.icons8.com/color/48/000000/reading-confirmation.png"
              className="img-tick"
              alt=""
            />
          </div>
          <p className="text-center">Đăng ký thành công</p>
        </div>
      </Modal>
    </>
  );
}

export default Footer;
