import phoneImg from "../../images/phone.png";
import style from "./CallUs.module.css";
import { AiOutlinePhone } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const CallUs = () => {
  return (
    <section className={style.callUs}>
      <div className={style.callUsTop}>
        <p>
          با توجه به تجربه بالای سپندبار و سابقه درخشانی که در زمینه باربری
          دارد، بدیهی است که افراد زیادی تمایل داشته باشند تا امور اسباب کشی
          منزل و سایر موارد مربوط به باربری خود را به سپندبار واگذار کنند. از
          همین رو مجموعه سپندبار تصمیم گرفته تا برای سهولت ارتباط بین مجموعه و
          ارباب رجوع بخش تماس را به دو شکل تلفنی و رزرو سرویس اینترنتی در نظر
          بگیرد. به این ترتیب دیگر مشتریان خدمات باربری می‌توانند به هر شکلی که
          تمایل داشتند اقدام به ثبت سفارش برای سرویس کنند.
        </p>
        <div>
          <img src={phoneImg} alt="" />
        </div>
      </div>
      <div className={style.callUsBottom}>
        <div className={style.item}>
          <div className={style.callUsBottomHeader}>
            <h2> اطلاعات تماس</h2>
            <span>
              <AiOutlinePhone />
            </span>
          </div>
          <p>شعبه غرب تهران: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>شعبه جنوب تهران: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>شعبه شمال تهران: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>شعبه مرکز تهران: ۰۲۱-۴۴۴۴۰۴۲۶</p>
        </div>
        <div className={style.item}>
          <div className={style.callUsBottomHeader}>
            <h2> پشتیبانی شبانه روزی</h2>
            <span>
              <BiSupport />
            </span>
          </div>
          <p>تلگرام: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>ایمیل: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>واتساپ: ۰۲۱-۴۴۴۴۰۴۲۶</p>
          <p>دفتر: ۰۲۱-۴۴۴۴۰۴۲۶</p>
        </div>
      </div>
    </section>
  );
};

export default CallUs;
