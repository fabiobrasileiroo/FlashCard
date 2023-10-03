import "./Header.css";

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
}
