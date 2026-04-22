export function Hero() {
  return (
    <section className="hero">
      <p className="hero-label">Tarkvara arendaja portfoolio</p>

      <h1 className="hero-title">ALEKSANDR VASSILJUK</h1>

      <p className="hero-subtitle">
        React • TypeScript • Frontend arendus • SPA projekt
      </p>

      <p className="hero-description">
        Ehitan kaasaegseid veebirakendusi, keskendun puhtale UI-le,
        kasutajakogemusele ja komponentpõhisele arhitektuurile.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">
          Vaata projekte
        </a>

        <a
          href="mailto:vassiljukaleksandr@gmail.com"
          className="btn btn-secondary"
        >
          Võta ühendust
        </a>
      </div>

      <div className="hero-meta">
        <span>📍 Eesti</span>
        <span>💻 Junior Developer</span>
        <span>⚛️ React / TS</span>
      </div>
    </section>
  );
}