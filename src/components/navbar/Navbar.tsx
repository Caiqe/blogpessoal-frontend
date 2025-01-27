import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  var componente: React.ReactNode;

  if (token !== "") {
    componente = (
      <>
        <div
          className="w-full bg-sky-700 text-white
                flex justify-around py-4 rounded-b-3xl "
        >
          <div className="container flex justify-around text-lg">
            <div>
              <Link
                to="/home"
                className="text-5xl font-extrabold  hover:scale-110 font-mono"
              >
                {" "}
                Mar de Idéias{" "}
              </Link>
            </div>

            <div className="flex  flex-row gap-4 mr-24 ">
              <Link
                to="/postagens"
                className="hover:underline rounded-3xl 
                                          border-white border-solid border-2 py-2 px-4 "
              >
                Postagens
              </Link>
              <Link
                to="/temas"
                className="hover:underline rounded-3xl 
                                          border-white border-solid border-2 py-2 px-4"
              >
                Temas
              </Link>

              <Link
                to="/perfil"
                className="hover:underline rounded-3xl 
                                          border-white border-solid border-2 py-2 px-4"
              >
                Perfil
              </Link>
              <Link
                to=""
                onClick={logout}
                className="hover:underline rounded-3xl 
                                          border-white border-solid border-2 py-2 px-4"
              >
                Sair
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    componente = (
      <>
        <div
          className="w-full bg-sky-700 text-white
                flex justify-around py-4 rounded-b-3xl mb-4"
        >
          <div className="container flex justify-between text-lg">
            <Link
              to="/login"
              className="text-5xl font-extrabold ml-56 hover:scale-110 font-mono"
            >
              {" "}
              Mar de Idéias{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }

  return componente;
}

export default Navbar;
