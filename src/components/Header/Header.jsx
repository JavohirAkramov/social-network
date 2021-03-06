import react from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoImg}>
        <p className={`${s.item} ${s.active}`}>logo</p>
      </div>
    </header>
  );
};

export default Header;
