import logoUrl from '../assets/colba-logo.png';
import founderUrl from '../assets/doniyor-nasriddinov.jpg';

function FloatingIcon({ variant, children }) {
  return (
    <div className={`float-card ${variant}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <img className="brand-logo" src={logoUrl} alt="COLBA Maktabi" />
          <h1 className="hero__title">
            <span>Sog'lom muhit</span> va kafolatlangan natija
          </h1>
          <a className="landing-btn" href="#form">
            Ma'lumot olish
          </a>
          <div className="hero__quote">
            <p>
              "Maqsadimiz - Zamonaviy dunyoda o'z so'ziga ega bo'lgan olimlarni,
              shifokorlarni, muhandislarni yetishtirish orqali kuchli millat qurish!"
            </p>
            <strong>COLBA Maktabining asoschisi - Doniyor Nasriddinov</strong>
          </div>
        </div>

        <div className="hero__visual" aria-label="Doniyor Nasriddinov">
          <div className="logo-frame">
            <img className="founder-photo" src={founderUrl} alt="Doniyor Nasriddinov" />
          </div>
          <FloatingIcon variant="one">
            <path d="M5 19V5h14v14H5Z" strokeWidth="2" />
            <path d="M8 9h8M8 13h5" strokeWidth="2" strokeLinecap="round" />
          </FloatingIcon>
          <FloatingIcon variant="two">
            <path
              d="M12 3l2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </FloatingIcon>
          <FloatingIcon variant="three">
            <path d="M8 10h8M8 14h5" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M6 4h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 3v-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </FloatingIcon>
        </div>
      </div>
    </section>
  );
}
