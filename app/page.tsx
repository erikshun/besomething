const visitTallyUrl = "https://visit-tally.erik-hokland.chatgpt.site";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="BeSomething home"><span>B</span>BeSomething</a>
        <div><a href="#about">About</a><a href="#products">Products</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">INDEPENDENT SOFTWARE DEVELOPER</p>
          <h1>Useful technology for everyday work.</h1>
          <p className="intro">BeSomething creates focused, privacy-conscious tools that help people keep better records and understand their work.</p>
          <div className="actions"><a className="primary" href="#products">Explore our products</a><a className="secondary" href="mailto:be.something.llc@gmail.com">Contact BeSomething</a></div>
        </div>
        <div className="principles" aria-label="Our principles">
          <p>OUR APPROACH</p>
          <div><span>01</span><strong>Clear by design</strong><small>Tools should explain themselves.</small></div>
          <div><span>02</span><strong>Privacy considered</strong><small>Collect only what a product truly needs.</small></div>
          <div><span>03</span><strong>Built for real life</strong><small>Practical software for everyday people.</small></div>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">ABOUT BESOMETHING</p>
        <div><h2>Small company.<br />Purposeful products.</h2><p>BeSomething is an independent software business creating approachable digital products. We focus on straightforward experiences, responsible data practices, and tools that solve a specific problem well.</p></div>
      </section>

      <section className="products" id="products">
        <header><div><p className="eyebrow">OUR PRODUCTS</p><h2>Software with a job to do.</h2></div><span className="count">01</span></header>
        <article className="product-card">
          <div className="app-icon" aria-hidden="true"><span>✓</span></div>
          <div className="product-copy"><p className="product-type">MOBILE &amp; WEB APP</p><h3>Visit Tally</h3><p>A private personal shift and pay record for caregivers. Track hours, compare an expected gross estimate with a paycheck, and keep a record of important work steps—all on the user&apos;s device.</p>
            <ul><li>No account required</li><li>No GPS tracking</li><li>No advertising</li><li>Local device storage</li></ul>
          </div>
          <div className="product-links"><a className="primary" href={visitTallyUrl}>Visit the app</a><a href={`${visitTallyUrl}/privacy`}>Privacy policy ↗</a><a href={`${visitTallyUrl}/support`}>Product support ↗</a></div>
        </article>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">CONTACT</p><h2>Questions about BeSomething or our products?</h2><a href="mailto:be.something.llc@gmail.com">be.something.llc@gmail.com</a>
      </section>

      <footer><a className="wordmark" href="#top"><span>B</span>BeSomething</a><p>Independent software developer</p><p>© 2026 BeSomething. All rights reserved.</p></footer>
    </main>
  );
}
