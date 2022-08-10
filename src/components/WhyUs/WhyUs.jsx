import ArticleHeader from "../ArticleHeader/ArticleHeader";
import {
  AiOutlineDollarCircle,
  AiOutlineUser,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsBox, BsClock } from "react-icons/bs";
import style from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <article>
      <ArticleHeader text="چرا باربری تهران" />
      <div className={style.row}>
        <div className={style.rowItem}>
          <AiOutlineDollarCircle />
          <h3>ارزان قیمت</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className={style.rowItem}>
          <BsClock />
          <h3>سرعت بالا</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className={style.rowItem}>
          <BsBox />
          <h3>بسته بندی مناسب</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className={style.rowItem}>
          <AiOutlineUser />
          <h3>کادر مجرب</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className={style.rowItem}>
          <AiOutlineCheck />
          <h3> +۵ سال سابقه</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhyUs;
