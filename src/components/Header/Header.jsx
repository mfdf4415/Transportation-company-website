import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const menuClickHandler = () => {
    setActiveNav(!activeNav);
  };

  return (
    <header className={style.header}>
      <AiOutlineMenu onClick={menuClickHandler} className={style.menuIcon} />
      <nav className={activeNav ? style.active : ""}>
        <ul className={style.list}>
          <li>
            <NavLink activeClassName={style.active} to="/concat">
              تماس با ما
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/cartoon">
              کارتون مخصوص
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/packing">
              بسته بندی
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/moving">
              اسباب کشی
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/">
              اتو بار تهران
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.logo}>
        <h1>
          <Link to="/">BARBARI</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
