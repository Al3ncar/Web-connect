import BannerLogin from "../assets/banner/education.webp";

export default function Login({
  getValue = () => {},
  username, 
  setUsername,
}) {
  return (
    <section className="login">
      <div className="login__box">
        <h1>Web Connect</h1>

        <label>Nome do usuário do GitHub:</label>
        <input
          type="text"
          placeholder="Username do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="login__box__btn">
          <button className="primary" onClick={() => getValue()}>
            Entrar
          </button>

          <a href="https://github.com/signup" target="_blank">
            <button className="secondary">Criar conta no GitHub</button>
          </a>
        </div>
      </div>

      <img src={BannerLogin} alt="Banner de login" />
    </section>
  );
}
