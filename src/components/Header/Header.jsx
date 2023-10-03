/* import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img 
          className="logo"
          src="https://raw.githubusercontent.com/fabiobrasileiroo/Curriculo/main/assets/img/favicon.ico"
          alt="Logo do Ocean"
        />
      </a>

      <nav>
        <a href="/">Home</a>

        <a href="/criar-personagem">Criar personagem</a>
      </nav>
    </header>
  );
} */
import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img
          className="logo"
          src="https://raw.githubusercontent.com/fabiobrasileiroo/Curriculo/main/assets/img/favicon.ico"
          alt="Logo do Ocean"
        />
      </a>

      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>

      <nav className={`menu ${menuVisible ? "menu-active" : ""}`}>
        <ul>
          <li className="menu-item">
            <a href="/" className="menu-link">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="/criar-personagem" className="menu-link">
              Criar personagem
            </a>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </header>
  );
}
