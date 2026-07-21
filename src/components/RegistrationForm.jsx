import { useRef, useState } from 'react';
import { BRANCHES, GRADES } from '../config.js';
import { createLeadPayload, formatPhone, sendLead } from '../utils.js';
import { SuccessOverlay } from './SuccessOverlay.jsx';

const initialForm = {
  name: '',
  branch: '',
  grade: '',
  phone: '',
};

function shake(element) {
  if (!element) return;
  element.classList.remove('shake');
  void element.offsetWidth;
  element.classList.add('shake');
  element.focus?.();
  window.setTimeout(() => element.classList.remove('shake'), 500);
}

export function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refs = {
    name: useRef(null),
    branch: useRef(null),
    grade: useRef(null),
    phone: useRef(null),
  };

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError('');
  }

  function validate() {
    if (!form.name.trim()) {
      shake(refs.name.current);
      setError('Iltimos, ismingizni kiriting.');
      return false;
    }
    if (!form.branch) {
      shake(refs.branch.current);
      setError('Iltimos, sizga qulay filialni tanlang.');
      return false;
    }
    if (!form.grade) {
      shake(refs.grade.current);
      setError('Iltimos, farzandingiz sinfini tanlang.');
      return false;
    }
    if (form.phone.replace(/\D/g, '').length < 9) {
      shake(refs.phone.current);
      setError("Iltimos, telefon raqamingizni to'liq kiriting.");
      return false;
    }

    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate() || isSubmitting) return;

    const payload = createLeadPayload(form);
    setIsSuccess(true);
    setIsSubmitting(true);

    try {
      await sendLead(payload);
    } catch (err) {
      console.error('Bitrix error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="form-page" id="form" aria-labelledby="form-title">
      <div className="form-card">
        <div className="form-intro">
          <div className="deco-dots" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="badge">
            <div className="badge-dot" />
            <span>Qabul davom etmoqda</span>
          </div>
          <h2 className="headline" id="form-title">
            Ro'yxatdan
            <br />
            o'ting
          </h2>
          <div className="subtext">
            <strong>Eslatma!</strong>
            <ul>
              <li>Maktabimiz Toshkent shahri va Samarqand shahrida joylashgan.</li>
              <li>
                Biz faqat tibbiyotga ixtisoslashgan maktabmiz va qabul <strong>5-sinfdan</strong>.
              </li>
              <li>Yotoqxona mavjud emas!</li>
            </ul>
          </div>
        </div>

        <form className="form-fields" onSubmit={handleSubmit}>
          <div className="field">
            <input
              ref={refs.name}
              type="text"
              value={form.name}
              placeholder="Ismingiz"
              autoComplete="name"
              onChange={(event) => updateField('name', event.target.value)}
            />
          </div>
          <div className="field select-wrap">
            <select
              ref={refs.branch}
              value={form.branch}
              onChange={(event) => updateField('branch', event.target.value)}
            >
              <option value="" disabled>
                Qaysi filialimiz sizga qulay?
              </option>
              {BRANCHES.map((branch) => (
                <option key={branch.value} value={branch.value}>
                  {branch.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field select-wrap">
            <select
              ref={refs.grade}
              value={form.grade}
              onChange={(event) => updateField('grade', event.target.value)}
            >
              <option value="" disabled>
                Farzandingiz qaysi sinfga o'tadi?
              </option>
              {GRADES.map((grade) => (
                <option key={grade.value} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
          </div>
          <div className="phone-wrap" ref={refs.phone}>
            <div className="phone-flag">+998</div>
            <input
              className="phone-input"
              type="tel"
              value={form.phone}
              placeholder="00-000-0000"
              maxLength="12"
              autoComplete="tel"
              onChange={(event) => updateField('phone', formatPhone(event.target.value))}
            />
          </div>
          <div className={`error-msg ${error ? 'show' : ''}`} role="alert">
            {error}
          </div>
          <button className="btn" type="submit" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? 'Yuborilmoqda...' : "Ma'lumotlarni jo'natish"}
          </button>
        </form>

        <SuccessOverlay branch={form.branch} isVisible={isSuccess} />
      </div>
    </section>
  );
}
