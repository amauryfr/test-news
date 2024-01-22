import React from 'react';
import Logo from '../assets/logo.png';

//Trocar tipo de fonte


const Layout = ({ children }) => {
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      w-full 
      bg-gray-900 
      justify-center 
    ">
      <header className="
        flex 
        flex-col 
        items-center
        bg-gray-800 
        w-full 
        text-center 
        py-4 
      ">
        <div className="flex w-full lg:max-w-6xl">
          <div className="w-full ml-4">
            <img src={Logo} alt="Logotipo" />
          </div>
          <div className="
            w-full 
            font-medium 
            text-4xl 
            text-white 
            flex 
            items-end 
            justify-end
          ">
            <div className="hidden lg:block mr-4">Gerenciamento de Notícias</div>
          </div>
        </div>
      </header>
      <main className="mb-4 w-full bg-white lg:max-w-6xl p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
