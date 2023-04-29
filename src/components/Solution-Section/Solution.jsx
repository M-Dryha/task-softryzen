import s from './Solution.module.css';
import People from '../../assets/home/people.jpg';
import People2x from '../../assets/home/people@2x.jpg';
import PeopleWebp from '../../assets/home/people.webp';
import PeopleWebp2x from '../../assets/home/people@2x.webp';

const SolutionSection = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <img
          src={`${People} 1x, ${People2x} 2x`}
          srcSet={`${PeopleWebp} 1x, ${PeopleWebp2x} 2x`}
          alt="Blog"
          className={s.solutionImage}
        />
      </div>
      <div className={s.container}>
        <p className={s.solutionString}>What you are looking for</p>
        <h2 className={s.solutionHeader}>We provide bespoke solutions</h2>
        <p className={s.solutionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={s.button}>
          Read more
        </button>
      </div>
    </section>
  );
};
export default SolutionSection;
