/* Tools */
import { useNavigate } from 'react-router-dom';

/* Component */
import { Button } from '../../components/Button';
import { Testimonial } from '../../components/Testimonial';
import { Feature } from '../../components/Feature';
import { FeatureReverse } from '../../components/Feature/FeatureReverse';

/* Image */
import footballImage from '../../assets/resource/football.webp';
import pushUpImage from '../../assets/resource/push-up.webp';
import gymImage from '../../assets/resource/gym.webp';
import ArrowIcon from '../../assets/icon-cheveron-down.svg';

/* Style */
import './styles.scss';

export const Landing = () => {

  const navigate = useNavigate();


  const handleClickRegister = () => {
    window.scrollTo({ top: 0 });
    navigate('/register');
  };

  const handleClickEvent = () => {
    window.scrollTo({ top: 0 });
    navigate('/home');
  };

  return (
    <main className="landing-page">

      <section className='hero-section'>
        <div className="hero-overlay"></div>
        <div className='hero-content'>
          <h2 className='hero-content-title'>Trouver vos  partenaires pour vos activités sportives</h2>
          <p className='hero-content-subtitle'>Le réseau social des amoureux du sport</p>
          <Button className={"landing-button hero-content-button btn-green"} onClick={handleClickRegister}>Lancez-vous</Button>
          <span className='hero-content-text'>Faites le grand saut !</span>
        </div>
      </section>

      <section className="arrow-section">
        <img src={ArrowIcon} alt="arrow icon" className="arrow-icon" />
      </section>

      <section className='partner'>
        <h3 className='partner-title'>Trouver votre partenaire de sport idéal et relevez des défis ensemble</h3>
        <p className='partner-subtitle'>Vous cherchez une raison de bouger ? Notre réseau social de sport est l'endroit idéal pour commencer !</p>
      </section>

      <div className='backgound-divider'> </div>


      <section className='features'>

        <Feature
          className="feature-create"
          title="Créer vos événements"
          primaryText="Engagez vous dans la communauté My Partner Outdoor"
          secondaryText="Expert ou débutant, partager vos envie et ne faites plus vos activités seules"
          button="Je me lance"
          onClick={handleClickRegister}
          image={gymImage}
          alt="picture of people practice gym"
        />

        <FeatureReverse
          className="feature-join"
          title="Participer aux événements"
          primaryText="Pratiquer vos sports favoris à plusieurs"
          secondaryText="Découvrer d’autres sports avec d’autres pratiquants"
          button="Je découvre"
          onClick={handleClickEvent}
          image={footballImage}
          alt="picture of football goalkeeper"
        />

        <Feature
          className="feature-meet"
          title="Faites des rencontres sportives"
          primaryText="Connectez-vous avec des personnes partageant les mêmes intérêts sportifs que vous."
          button="En savoir plus"
          onClick={handleClickEvent}
          image={pushUpImage}
          alt="picture of people pratice push up"
        />
      </section>

      <Testimonial />

      <section className='landing-register'>
        <h3 className="landing-register-title">Inscrivez-vous gratuitement et trouvez votre partenaire de sport idéal en quelques clics seulement</h3>
        <Button className={"landing-button btn-green"} onClick={handleClickRegister}>Let's go</Button>
      </section>

    </main>
  );
}
