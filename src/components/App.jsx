import Header from './Header-Section';
import Hero from './Hero-Sectiom';
import SolutionSection from './Solution-Section';
// import CasesSection from './Cases-Section';
import BlogSection from './Blog-Section';
import TeamSection from './Team-Section';
import Footer from './Footer-Section';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SolutionSection />
      {/* <CasesSection />  */}
      <BlogSection />
      <TeamSection />
      <Footer />
    </>
  );
};
