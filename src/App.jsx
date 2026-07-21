import bgUrl from './assets/bg.svg';
import { Hero } from './components/Hero.jsx';
import { Guarantees } from './components/Guarantees.jsx';
import { RegistrationForm } from './components/RegistrationForm.jsx';

export default function App() {
  return (
    <>
      <div className="background" aria-hidden="true">
        <img src={bgUrl} alt="" loading="eager" />
      </div>
      <main>
        <Hero />
        <Guarantees />
        <RegistrationForm />
      </main>
    </>
  );
}
