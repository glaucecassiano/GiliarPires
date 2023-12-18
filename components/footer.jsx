import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../assets/Projeto Site Giliar 1.svg";
import barraBranca from "../assets/Barra Branca divisora Top.svg";

export const Footer = () => {
  return (
    <footer className="rodape">

      <div className="rodape-inteiro">
      <img src={Logo} alt="" className=""/>

      <div className="links-rodape">
        <div className="links-um">
          <h3>Serviços</h3>
          <a>
            <Link to="/">LinkUm</Link>
          </a>
          <a>
            <Link to="/">LinkDois</Link>
          </a>
          <a>
            <Link to="/">LinkTres</Link>
          </a>
          <a>
            <Link to="/">LinkQuatro</Link>
          </a>
          <a>
            <Link to="/">LinkCinco</Link>
          </a>
          <a>
            <Link to="/">LinkSeis</Link>
          </a>
          <a>
            <Link to="/">LinkSete</Link>
          </a>
        </div>
        <div className="links-dois">
          <h3>Links</h3>
          <a>
            <Link to="/">LinkUm</Link>
          </a>
          <a>
            <Link to="/">LinkDois</Link>
          </a>
          <a>
            <Link to="/">LinkTres</Link>
          </a>
          <a>
            <Link to="/">LinkQuatro</Link>
          </a>
          <a>
            <Link to="/">LinkCinco</Link>
          </a>
          <a>
            <Link to="/">LinkSeis</Link>
          </a>
          <a>
            <Link to="/">LinkSete</Link>
          </a>
        </div>
        <div className="links-tres">
          <h3>Contatos</h3>
          <a>
            <Link to="/">LinkUm</Link>
          </a>
          <a>
            <Link to="/">LinkDois</Link>
          </a>
          <a>
            <Link to="/">LinkTres</Link>
          </a>
          <div className="redes-sociais">
            <h3>Redes Sociais</h3>
            <div className="icones-redesocial">
              <div className="redesocial"></div>
              <div className="redesocial"></div>
              <div className="redesocial"></div>
              <div className="redesocial"></div>
              <div className="redesocial"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <img src={barraBranca} alt="" className="barra-branca" />
        <p className="creditos">
          @Direitos reservados 2023 - Powered by Relevance CNPJ
          xxxxxxxxxx.xxxx.xxxxx Porto Alegre | Rio Grande do Sul
        </p>
      </div>

    </footer>
  );
};
