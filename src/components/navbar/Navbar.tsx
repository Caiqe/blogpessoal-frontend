import { Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-black text-white">
        <div className="container flex justify-evenly text-3xl font-bold">
          <Link to='/home' className="text-4xl font-bold">Blog Pessoal</Link>
          <div className="flex gap-4 text-lg">
            Postagens
            Temas 
            Cadastrar 
            Tema 
            Perfil 
            Sair
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar