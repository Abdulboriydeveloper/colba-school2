import logoUrl from '../assets/colba-logo.png';
import founderUrl from '../assets/DoniyorNasriddinov.jpg';

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
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="shieldClip" clipPathUnits="objectBoundingBox">
                <path d="M0.5,0 C0.78,0 1,0.05 1,0.05 L1,0.51 C1,0.74 0.78,0.93 0.5,1 C0.22,0.93 0,0.74 0,0.51 L0,0.05 C0,0.05 0.22,0 0.5,0 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="logo-frame">
            <img className="founder-photo" src={founderUrl} alt="Doniyor Nasriddinov" />
          </div>
        </div>
      </div>
    </section>
  );
}