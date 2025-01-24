import React, { Component } from "react";

function Sobre() {
  return (
    <>
      <div className="bg-[url(https://ik.imagekit.io/ix39wusls/oceano.png?updatedAt=1737639777655)] flex justify-center rounded-3xl ">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 ">
            <div className="flex flex-col  p-12   rounded-3xl bg-sky-300  justify-center ">
              <h2 className="text-4xl font-bold text-black font-mono">
                O que é o Mar de Idéias?
              </h2>
              <p className="text-xl text-black text-center underline font-semibold mt-5">
                Mais que um Blog, um espaço de conexão.
              </p>
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
      <div className="flex flex-row items-center my-4 bg-sky-300 rounded-3xl">
        <div className=" flex flex-col items-center w-1/2 my-8 mr-2 ml-4">
          <h2 className=" font-mono font-bold text-4xl">Sobre o Site:</h2>
          <p className=" text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis modi
            hic perspiciatis, officia autem id aliquam ab? Recusandae, aliquid
            porro enim inventore, illo vitae error velit culpa nostrum, libero
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam numquam, aperiam, necessitatibus magni officia modi culpa
            atque illo pariatur officiis et omnis natus non! Expedita ratione
            velit autem ullam aperiam.
          </p>
        </div>
        <div className=" flex flex-col items-center w-1/2 my-8 mr-4 ml-2">
          <h2 className=" font-mono font-bold text-4xl">Sobre o Projeto:</h2>
          <p className=" text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis modi
            hic perspiciatis, officia autem id aliquam ab? Recusandae, aliquid
            porro enim inventore, illo vitae error velit culpa nostrum, libero
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam numquam, aperiam, necessitatibus magni officia modi culpa
            atque illo pariatur officiis et omnis natus non! Expedita ratione
            velit autem ullam aperiam.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className=" font-mono font-bold text-4xl">
          Tecnologias Utilizadas:
        </h2>
        <div className="flex flex-row items-center gap-2 mt-4 mb-2">
          
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Logo JavaScript" />
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Logo TypeScript" /> 
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Logo React" />   
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Logo Tailwind" />   
          <img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" alt="Logo Git" /> 
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Logo Github" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Logo HTML" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Logo CSS" />
          <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Logo React Router" />

        </div>
      </div>
    </>
  );
}
export default Sobre;
