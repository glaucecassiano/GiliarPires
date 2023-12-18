import { Header } from "../components/header";
import "./home.css";
import barraSeparadora from "../assets/Barra separadora.svg";
import barraBranca from "../assets/Barra Branca divisora Top.svg";
import { Footer } from "../components/footer";
import  especialidadeUm from "../assets/Camada_1.svg";
import especialidadeDois from "../assets/Camada_1 (1).svg";
import especialidadeTres from "../assets/Camada_1 (2).svg";
import especialidadeQuatro from "../assets/Camada_1 (3).svg";
import especialidadeCinco from "../assets/Camada_1 (4).svg";
import escritorio from "../assets/Rectangle.svg";
import giliarpires from "../assets/Group 1.svg";
import anaamorim from "../assets/Group 2.svg";
import jefferson from "../assets/Group 9.svg";
import equipequatro from "../assets/Group 5.svg";
import equipecinco from "../assets/Group 7.svg";


export const Home = () => {
  return (
    <div>
      <Header />
      <div className="banners">
        <h2>Banners</h2>
        <div id="imgbanner">
          <button>Saiba Mais</button>
        </div>
      </div>
      <div>
        <img src={barraSeparadora} alt="" id="barraSeparadora" />
      </div>
      <div className="especialidadesescritorio">
        <h2>Especialidades</h2>
        <div id="especialidades-inteiro">
        <div className="especialidades-lista">
          <div className="especilidadeUm">
          <img src={especialidadeUm} alt="" id="especialidades"/>
          <p id="paragrafoEspecialidade">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="especialidadeDois">
          <img src={especialidadeDois} alt="" id="especialidades"/>
          <p id="paragrafoEspecialidade">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="especialidadeTres">
          <img src={especialidadeTres} alt="" id="especialidades"/>
          <p id="paragrafoEspecialidade">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="especialidadeQuatro">
          <img src={especialidadeQuatro} alt="" id="especialidades"/>
          <p id="paragrafoEspecialidade">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
          <div className="especialidadeCinco">
          <img src={especialidadeCinco} alt="" id="especialidades"/>
          <p id="paragrafoEspecialidade">XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>


        </div>
      </div>
    </div>
      <div className="escritorio">
        <img src={barraBranca} alt="" id="barraSeparadora" />
        <h2>Escritório</h2>
        <img src={escritorio} alt="" id="escritorio-carrosel"/>
      </div>
      <div id="equipe">
      
        <h2>Equipe</h2>
        <div className="equipe-display">
          <div className="giliarpires">
      <img src={giliarpires} alt="" className="equipe-fotos"/>
      <h3>Giliar Pires</h3>
        <p className="equipe-paragrafo">XXXXXXXXXXXXXXXXXXXX</p>
        </div>

        <div className="anamorim">
        <img src={anaamorim} alt="" className="equipe-fotos"/>

        <h3>Ana Amorim</h3>

        <p className="equipe-paragrafo">XXXXXXXXXXXXXXXXXXXXX</p>
        </div>
        <div className="jefferson">
        <img src={jefferson} alt="" className="equipe-fotos"/>
        <h3>Jefferson</h3>
        <p className="equipe-paragrafo">XXXXXXXXXXXXXXXXXXXX</p>
        </div>
        <div className="equipequatro">
        <img src={equipequatro} alt="" className="equipe-fotos"/>
        <h3>Equipe Quatro</h3>

        <p className="equipe-paragrafo">XXXXXXXXXXXXXXXXXXXX</p>
        </div>
        <div className="equipecinco">
        <img src={equipecinco} alt="" className="equipe-fotos"/>
        <h3>Equipe Cinco</h3>

        <p className="equipe-paragrafo">XXXXXXXXXXXXXXXXXXXX</p>
        </div>
        </div>

        <div className="mapa">
          
        </div>
      </div>

      <Footer />

    </div>
  );
};
