import { Link } from "react-router-dom";
import Wrapper from "../../hoc/Wrapper";
import style from "./NotFoundPage.module.css";
import ErrorImg from "../../images/404.png";

const NotFoundPage = () => {
  return (
    <section className={style.bunner}>
      <div className={style.content}>
        <p>این صفحه پیدا نشد لطفا به صفحه اصلی سایت برگردید</p>
        <p>۰۹۱۹ ۴۶۴ ۵۶۴۳</p>
        <button>
          <Link to="/">صفحه اصلی</Link>
        </button>
      </div>
      <div className={style.imgContainer}>
        <img src={ErrorImg} alt="404 error" />
      </div>
    </section>
  );
};

export default Wrapper(NotFoundPage);
