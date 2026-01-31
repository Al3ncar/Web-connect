import { useState } from "react";
import { Link } from "react-router-dom";
import { navData, menuDropdown } from "../../utils/data-nav";

import Ilogo from "../../assets/logo/icon.png";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <header className="header-container">
      <img src={Ilogo} alt="Icone de mão segurando um coração de desenho" />
      <nav>
        <ul>
          {navData.map((item) => (
            <Link to={item.toLocal} key={item.id}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="header-container--profile">
        <button onClick={() => setOpenMenu((state) => !state)}>
          <img
            src="https://avatars.githubusercontent.com/u/93939408?v=4"
            alt="Icone de perfil do Igor Alencar"
          />
        </button>
      </div>

      {isOpenMenu && (
        <ul className="header-container--profile__menu"> 
          {menuDropdown.map((item) => (
            <Link to={item.toLocal} key={item.id}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
