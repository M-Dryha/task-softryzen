import s from './Team.module.css';
import President from '../../assets/team/person1.jpg';
import President2x from '../../assets/team/person1@2x.jpg';
import PresidentWebp from '../../assets/team/person1.webp';
import PresidentWebp2x from '../../assets/team/person1@2x.webp';
import VicePresident from '../../assets/team/person2.jpg';
import VicePresident2x from '../../assets/team/person2@2x.jpg';
import VicePresidentWebp from '../../assets/team/person2.webp';
import VicePresidentWebp2x from '../../assets/team/person2@2x.webp';
import MarketingHead from '../../assets/team/person3.jpg';
import MarketingHead2x from '../../assets/team/person3@2x.jpg';
import MarketingHeadWebp from '../../assets/team/person3.webp';
import MarketingHeadWebp2x from '../../assets/team/person3@2x.webp';

const TeamSection = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <p className={s.teamString}>Who we are</p>
        <h2 className={s.teamHeader}>Our Professional Team</h2>
        <p className={s.teamText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.imageContainer}>
          <li>
            <img
              src={`${President} 1x, ${President2x} 2x`}
              srcSet={`${PresidentWebp} 1x, ${PresidentWebp2x} 2x`}
              alt="John Doe, President"
              className={s.teamImage}
            />
            <h3 className={s.name}>John Doe</h3>
            <p className={s.position}>President</p>
          </li>
          <li>
            <img
              src={`${VicePresident} 1x, ${VicePresident2x} 2x`}
              srcSet={`${VicePresidentWebp} 1x, ${VicePresidentWebp2x} 2x`}
              alt="John Doe, President"
              className={s.teamImage}
            />

            <h3 className={s.name}>Jane Doe</h3>
            <p className={s.position}>Vice President</p>
          </li>
          <li>
            <img
              src={`${MarketingHead} 1x, ${MarketingHead2x} 2x`}
              srcSet={`${MarketingHeadWebp} 1x, ${MarketingHeadWebp2x} 2x`}
              alt="John Doe, President"
              className={s.teamImage}
            />
            <h3 className={s.name}>Steve Smith</h3>
            <p className={s.position}>Marketing Head</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TeamSection;
