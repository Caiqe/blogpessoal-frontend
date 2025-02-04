import { useLocation, useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { ReactNode, useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaPostagens() {
  const navigate = useNavigate();

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  const location = useLocation();

  let componente: ReactNode;

  

  if (location.pathname === "/home" && postagens.length >= 3) {
    componente = (
      <>
        {postagens.length === 0 && (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div
          className="container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {postagens.slice((postagens.length-3), postagens.length).map((postagem) => (
            <CardPostagens key={postagem.id} postagem={postagem} />
          ))}
        </div>
      </>
    );
  } else if(location.pathname!== "/home"){
    componente=(
      <>
    
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div
        className="container mx-auto my-4 
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {postagens.map((postagem) => (
          <CardPostagens key={postagem.id} postagem={postagem} />
        ))}
      </div>
    </>
    );
    
  }

  return componente;
}

export default ListaPostagens;
