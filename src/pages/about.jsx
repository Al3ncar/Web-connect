import IIcon1 from "../assets/icon/icon.png";
import IIcon2 from "../assets/icon/icon-2.png";
import IIcon3 from "../assets/icon/icon-3.png";
import { Badge } from "../components/badge/badge";

const About = ({ imgProfile, userName, bio, location, login }) => {
  const dataBadge = [
    { key: 0, label: "Empatia" },
    { key: 1, label: "Ajuda" },
    { key: 2, label: "Disponibilidade" },
    { key: 3, label: "Tecnologia" },
  ];

  return (
    <section className="about">
      <section className="about-me">
        <div className="about-me__profile">
          <img src={imgProfile} alt={`Imagem de perfil ${userName}`} />
        </div>
        <div className="about-me__content">
          <h1>{userName}</h1>
          <span>Voluntario Ativo</span>

          <p>{bio}</p>
          <ul>
            <li>
              <img src={IIcon3} alt="" />
              <p>{location}</p>
            </li>
            <li>
              <img src={IIcon2} alt="" />
              <p>{login}@gmail.com</p>
            </li>
            <li>
              <img src={IIcon1} alt="" />
              <p>Membro desde Janeiro 2022</p>
            </li>
          </ul>
          <div className="about-me__content__badges">
            {dataBadge.map((item) => (
              <Badge title={item.label} id={item.id} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
