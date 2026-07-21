const guarantees = [
  {
    title: "Sog'lom muhit",
    text: "Farzandingizning yaxshi o'qimaydigan, odob-axloqi va tarbiyasi yomon sinfdoshlari bo'lmasligiga 100% kafolat beramiz",
    icon: (
      <>
        <path d="M20 7c-4.5 0-8 3.5-8 8v3" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M12 15c0-4.5-3.5-8-8-8 0 4.5 3.5 8 8 8Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: '100%lik natija',
    text: "Dasturimiz orqali farzandingizning tibbiyot oliygohiga talaba bo'lishiga 100% kafolat beramiz",
    icon: (
      <>
        <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" strokeWidth="2" strokeLinejoin="round" />
        <path d="M17 6h3v2a3 3 0 0 1-3 3M7 6H4v2a3 3 0 0 0 3 3" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Kompleks rivojlanish',
    text: "Farzandingizning hayotiy ko'nikmalari rivojlanishi, yuqori akademik natijalarga erishishi va qadriyatli muhitda kamol topishini ta'minlaymiz.",
    icon: (
      <>
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: '100% Grant',
    text: "COLBA Maktabida 5 ta fandan sertifikatni qo'lga kiritgan o'quvchilar 100% grant asosida ta'lim olishini kafolatlaymiz.",
    icon: (
      <>
        <path d="M12 15V3" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 8l5-5 5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 13v6h14v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export function Guarantees() {
  return (
    <section className="section guarantees" id="guarantees">
      <div className="guarantees__inner">
        <h2 className="section-title">COLBA Maktabi sizga kafolatlaydi:</h2>
        <div className="guarantee-grid">
          {guarantees.map((item) => (
            <article className="guarantee-card" key={item.title}>
              <div className="guarantee-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  {item.icon}
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <a className="landing-btn landing-btn--gold" href="#form">
          Ro'yxatdan o'tish
        </a>
      </div>
    </section>
  );
}
