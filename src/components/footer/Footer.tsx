import {
  FacebookLogo,
  GithubLogo,
  Info,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-sky-700 text-white rounded-t-3xl mt-4">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold font-mono pb-2">
            Desenvolvidor por Caique Gomes 🧑🏻‍💻 | Copyright: {data}
          </p>
          
          <div className="flex gap-4 bg-sky-950 px-4 py-1 rounded-3xl">
            <a
              href="https://github.com/Caiqe"
              target="_blank"
              className="hover:scale-110"
            >
              <GithubLogo size={42} weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/cttcaiquegomes/"
              target="_blank"
              className="hover:scale-110"
            >
              <LinkedinLogo size={48} weight="fill" />
            </a>
            <Link to="/sobre" className="hover:scale-110">
              <Info size={48} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
