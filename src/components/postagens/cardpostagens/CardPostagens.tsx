import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagens({ postagem }: CardPostagensProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded-3xl overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-sky-700 py-2 px-4 items-center gap-4">
          <img
            src={
              postagem.usuario?.foto === undefined || " "
                ? "https://ik.imagekit.io/ix39wusls/fotoUsuario?updatedAt=1737721915469"
                : postagem.usuario?.foto
            }
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4  bg-sky-300">
          <h4 className="text-lg font-semibold uppercase ">
            {postagem.titulo}
          </h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-slate-100 bg-sky-400 hover:bg-sky-950 
    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagens;
