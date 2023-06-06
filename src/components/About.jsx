import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Sinta-se à vontade para explorar e conhecer meu portfólio, se você
              está interessado em trabalhar comigo entre em contato.{" "}
            </p>
          </div>
          <div>
            <p className='pt-1'>
              Estudante de Sistemas de Informação no Instituto Federal do
              Tocantins - Campus Paraíso, atualmente cursando o 8º período e
              buscando minha primeira oportunidade como desenvolvedor, Estou
              sempre disposto a aprender novas habilidades e tecnologias para
              acompanhar as tendências do mercado e fornecer soluções inovadoras
              e eficientes. Durante minha formação acadêmica, desenvolvi
              habilidades em programação, resolução de problemas e trabalho em
              equipe.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;