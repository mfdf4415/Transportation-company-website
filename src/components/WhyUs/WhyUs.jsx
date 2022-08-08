import ArticleHeader from "../ArticleHeader/ArticleHeader";
import { AiFillDollarCircle } from "react-icons/ai";
import style from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <article>
      <ArticleHeader text="چرا باربری تهران" />
      <div className={style.row}>
        <div className={style.rowItem}>
          <div className={style.rowItemTop}>
            <AiFillDollarCircle />
            <h3>ارزان قیمت</h3>
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className={style.rowItem}>
          <div className={style.rowItemTop}>
            <AiFillDollarCircle />
            <h3>سرعت بالا</h3>
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className={style.rowItem}>
          <div className={style.rowItemTop}>
            <AiFillDollarCircle />
            <h3>بسته بندی مناسب</h3>
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className={style.rowItem}>
          <div className={style.rowItemTop}>
            <AiFillDollarCircle />
            <h3>کادر مجرب</h3>
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div className={style.rowItem}>
          <div className={style.rowItemTop}>
            <AiFillDollarCircle />
            <h3> +۵ سال سابقه</h3>
          </div>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
      </div>
    </article>
  );
};

export default WhyUs;
