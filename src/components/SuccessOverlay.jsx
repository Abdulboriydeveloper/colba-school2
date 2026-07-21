import { useEffect, useRef } from 'react';
import { TELEGRAM_LINKS } from '../config.js';

const CONFETTI_COLORS = ['#f5b800', '#91cc52', '#ffffff', '#ffdd57', '#c8ff70', '#ffd966'];

function runConfetti(canvas) {
  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;

  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 200,
    radius: 4 + Math.random() * 5,
    speed: 0.8 + Math.random() * 2.2,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    tilt: 0,
    angle: 0,
    angleSpeed: 0.05 + Math.random() * 0.08,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
    start: Date.now() + Math.random() * 600,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = Date.now();
    let active = false;

    for (const piece of pieces) {
      if (now < piece.start) {
        active = true;
        continue;
      }

      if (piece.y < canvas.height + 20) active = true;
      piece.angle += piece.angleSpeed;
      piece.y += piece.speed;
      piece.x += Math.sin(piece.angle) * 1.2;
      piece.tilt = Math.sin(piece.angle) * 12;

      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.tilt * Math.PI) / 180);
      ctx.fillStyle = piece.color;
      ctx.globalAlpha = Math.max(0, 1 - piece.y / (canvas.height * 1.1));

      if (piece.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, piece.radius, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-piece.radius, -piece.radius / 2, piece.radius * 2, piece.radius);
      }

      ctx.restore();
    }

    if (active) requestAnimationFrame(draw);
  }

  window.setTimeout(draw, 600);
}

export function SuccessOverlay({ branch, isVisible }) {
  const canvasRef = useRef(null);
  const telegramLink = TELEGRAM_LINKS[branch] || 'https://t.me/colba_taqdimot';

  useEffect(() => {
    if (isVisible && canvasRef.current) runConfetti(canvasRef.current);
  }, [isVisible]);

  return (
    <div className={`success-overlay ${isVisible ? 'show' : ''}`} id="success">
      <canvas className="confetti-canvas" ref={canvasRef} />
      <div className="success-content">
        <div className="check-ring">
          <svg viewBox="0 0 96 96" aria-hidden="true">
            <circle className="ring-bg" cx="48" cy="48" r="44" />
            <circle className="ring-progress" cx="48" cy="48" r="44" />
          </svg>
          <div className="check-inner">
            <svg viewBox="0 0 36 36" aria-hidden="true">
              <polyline className="check-path" points="7,19 15,27 29,11" />
            </svg>
          </div>
        </div>
        <div className="s-badge">Muvaffaqiyatli</div>
        <div className="s-title">Ariza qabul qilindi!</div>
        <div className="s-divider" />
        <p className="s-sub">
          Tez orada sizga <strong>55-557-20-20</strong> raqamidan aloqaga chiqib,
          batafsil ma'lumot beramiz!
        </p>
        <div className="s-actions">
          <a className="btn-tg" href={telegramLink} target="_blank" rel="noopener noreferrer">
            <svg className="tg-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="12" fill="#0088cc" />
              <path
                d="M17.5 6.8L5.3 11.4c-.8.3-.8.8-.1 1l3.1 1 1.2 3.6c.2.5.4.6.8.6.3 0 .4-.1.6-.3l1.5-1.5 3.1 2.3c.6.3 1 .1 1.1-.5l2-9.4c.2-.8-.3-1.1-.9-.9z"
                fill="#fff"
              />
            </svg>
            Telegram kanal
            <span className="arrow-anim">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#0d3b1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <p className="actions-hint">Yangiliklarni kuzatib borish uchun kanalimizga obuna bo'ling!</p>
        </div>
      </div>
    </div>
  );
}
