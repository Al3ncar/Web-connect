import AllHands from "../assets/banner/all-hands.png";
import { Button } from "../components/button/btn";
import { dataStatics } from "../utils/data/data-home";

const HomePage = () => {
  return (
    <section className="home">
      <section className="home--page">
        <h1>Projetos Sociais que <span></span></h1>
        <p className="home--page--parg">
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <Button type="square-secondary" label="Cadastrar Empresa" />
        <div className="home--page--cards">
          {dataStatics.map((item) => (
            <aside key={item.id}>
              <h2> {item.value}</h2>
              <p>{item.description}</p>
            </aside>
          ))}
        </div>
      </section>
      <img src={AllHands} alt="Uma mão com um mundinho pequeno no meio com varias pessoinhas de papel " />
    </section>
  );
};
                          
export default HomePage;