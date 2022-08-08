import style from "./Landing.module.css";
import logisticImg from "../../images/logistic-removebg.png";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className={style.landing}>
      <div className={style.leftRow}>
        <h2>باربری تهران</h2>
        <p>
          . با یک تماس با برترین باربری تهران اسباب کشی حرفه ای را تجربه کنید
          <br />
          متخصص در امر بسته بندی و حمل اثاثیه
        </p>
        <button>
          <Link to="tel:9194645643">
            <AiTwotonePhone /> تماس با ما
          </Link>
        </button>
      </div>
      <div className={style.rightRow}>
        <img src={logisticImg} alt="logistic" />
      </div>
    </section>
  );
};

export default Landing;
