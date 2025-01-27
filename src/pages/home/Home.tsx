import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className=" mt-4 bg-[url(https://ik.imagekit.io/ix39wusls/oceano.png?updatedAt=1737639777655)] flex justify-center rounded-3xl">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 ">
            <div className="flex flex-col  p-12   rounded-3xl bg-sky-300  justify-center ">
              <h2 className="text-6xl font-bold text-black font-mono">
                Seja Bem Vinde!
              </h2>
              <p className="text-xl text-black text-center underline font-semibold mt-5">
                Idéias, Amizades, Conexão e Tecnologia.
              </p>
              <div className="mt-8 ml-40">
                <ModalPostagem />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/ix39wusls/mergulhador%20blog%20(2).svg?updatedAt=1737642894341"
              alt="Imagem Página Home"
              className=" hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h2 className="font-mono text-4xl bg-sky-700 rounded-3xl px-20 py-2 mb-4 shadow-2xl">Veja o que estão postando:  </h2>
        <ListaPostagens />
      </div>
    </>
  );
}

export default Home;
