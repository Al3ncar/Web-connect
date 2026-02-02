import IIcon1 from "../assets/icon/icon.png";
import IIcon2 from "../assets/icon/icon-2.png";
import IIcon3 from "../assets/icon/icon-3.png";
import { Badge } from "../components/badge/badge";

const About = () => {
  const dataBadge = [
    { key: 0, label: "Tecnologia" },
    { key: 1, label: "Tecnologia" },
    { key: 2, label: "Tecnologia" },
    { key: 3, label: "Tecnologia" },
  ];

  return (
    <section className="about">
      <section className="about-me">
        <div className="about-me__profile">
          <img
            src="https://github.com/Al3ncar.png"
            alt="Imagem do perfil Igor Alencar"
          />
        </div>
        <div className="about-me__content">
          <h1>Igor Alencar</h1>
          <span>Voluntario Ativo</span>

          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul>
            <li>
              <img src={IIcon1} alt="" />
              <p>São Paulo, SP</p>
            </li>
            <li>
              <img src={IIcon2} alt="" />
              <p>igor@gmail.com</p>
            </li>
            <li>
              <img src={IIcon3} alt="" />
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
