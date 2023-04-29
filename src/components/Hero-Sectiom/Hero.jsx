import s from './Hero.module.css';
import { ReactComponent as RightArrow } from '../../assets/svg/right.svg';

const Hero = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.header}>The Sky Is The Limit</h1>
        <h2 className={s.heroText}>
          We provide world class financial assistance
        </h2>
        <button type="button" className={s.button}>
          <RightArrow className={s.svg} /> Read more
        </button>
      </div>
    </section>
  );
};

export default Hero;
