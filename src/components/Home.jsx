import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f] text-gray-100">
      <div className="max-w-[1000px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-pink-600">Olá, meu nome é</p>
          <h1 className="py-4 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Jorge Lucas
          </h1>
          <h1 className="py-2 text-4xl sm:text-6xl font-bold text-[#8892b0] ">
            Full Stack Developer.
          </h1>
          <p className="py-4  sm:max-w-[70%]">
            Desenvolvedor apaixonado por tecnologia e comprometido em criar
            soluções eficientes, sempre em busca de projetos desafiadores para
            aprimorar constantemente minhas habilidades e conhecimentos.
          </p>
          <div className="flex items-center gap-5 max-w-[330px] py-4">
          <a
              href="https://github.com/JorgeGS1998" 
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-pink-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/JorgeGS1998"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-pink-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <div className="rounded-full  bg-pink-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaWhatsapp />
            </div>

            <button className="rounded-full  bg-pink-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FiDownload href="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
