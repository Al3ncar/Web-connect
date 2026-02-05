import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navData } from "../../utils/data/data-nav";
import { useClickOutside } from "../../utils/func/useClickOutSide";
import Ilogo from "../../assets/logo/icon.png";

const Header = ({ imgProfile, userName }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [visibleItemMenu, setVisibleItemMenu] = useState(0);
  
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const screenMenu = [
        { min: 1224, action: () => setVisibleItemMenu(0) },
        { min: 1024, action: () => setVisibleItemMenu(1) },
        { min: 824, action: () => setVisibleItemMenu(2) },
        { min: 724, action: () => setVisibleItemMenu(3) },
        { min: 624, action: () => setVisibleItemMenu(4) },
        { min: 524, action: () => setVisibleItemMenu(5) },
      ];
      const responsiveScreen = screenMenu.find((item) => width >= item.min);
      responsiveScreen?.action();
      setOpenMenu(false);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setOpenMenu(false);

  const backMenu = () => {
    closeMenu();
    navigate("/");
    window.location.reload();
  };
  useClickOutside(menuRef, closeMenu);

  return (
    <header className="header-container">
      <img src={Ilogo} alt="Icone de mão segurando um coração de desenho" />
      <nav>
        <ul>
          {navData.slice(visibleItemMenu).map((item) => (
            <Link to={item.toLocal} key={item.id}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="header-container--profile">
        <button onClick={() => setOpenMenu((state) => !state)}>
          <img
            id="profile"
            src={imgProfile}
            alt={`Imagem de perfil ${userName}`}
          />
        </button>
      </div>

      {isOpenMenu && (
        <ul ref={menuRef} className="header-container--profile__menu">
          <Link to="/about" onClick={() => closeMenu()}>
            <li>{userName}</li>
          </Link>
          {navData.slice(0, visibleItemMenu).map((item) => (
            <Link to={item.toLocal} key={item.id} onClick={() => closeMenu()}>
              <li>{item.title}</li>
            </Link>
          ))}
          <Link to="/" onClick={() => backMenu()}>
            <li>Sair</li>
          </Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
