import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css"
import logo from "../assets/giliarpireslogo.svg"
import Bandeira from "../assets/Projeto Site Giliar-06 1.svg"



export const Header = () => {
    const navigate = useNavigate();

    const CadastroPage = (event) => {
        event.preventDefault();
    
        return navigate("/cadastro");
      };
    
    

    return (
      <div>

        <div className="bannerUm">
         <div className="redesocial"></div>
         <div className="redesocial"></div>
         <div className="redesocial"></div>
         <div className="redesocial"></div>
         <div className="redesocial"></div>
         <div className="sejamembro">
         <h3 id="associasse">Seja Membro</h3>
         <button onClick={CadastroPage}>Associe-se</button>
          <img  className="bandeira"src={Bandeira} alt="" />
         </div>  
        </div>

<div className="navbar">
  
<img src={logo} alt="" />

        <nav className="nav">
          
                <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/forum">Especialidades</Link>
        </li>
        <li>
          <Link to="/escritório">Escritório</Link>
        </li>
        <li>
          <Link to="/equipe">Equipe</Link>
        </li>
        <li>
          <Link to="/noticias">Notícias</Link>
        </li>
        <li>
          <Link to="/podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contatos">Contatos</Link>
        </li>

      </ul>
      
  
        </nav>
        </div>
        </div>
    )
}


