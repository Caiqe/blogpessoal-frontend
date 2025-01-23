import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-sky-300 flex justify-center rounded-3xl">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-7xl font-bold text-black font-mono">
              Seja Bem Vinde!
            </h2>
            <p className="text-xl text-black text-center underline font-semibold">
              Idéias, Amizades, Conexão e Tecnologia.
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/ix39wusls/astronauta%20(2).svg?updatedAt=1737505823261"
              alt="Imagem Página Home"
              className="hover:scale-110"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
