/* Tools */
import { useNavigate } from 'react-router-dom';

/* Component */
import { Button } from '../../components/Button';
import { Testimonial } from '../../components/Testimonial';

/* Image */
import footballImage from 'src/assets/resource/football.webp';
import pushUpImage from 'src/assets/resource/push-up.webp';
import gymImage from 'src/assets/resource/gym.jpg';
import ArrowIcon from 'src/assets/icon-cheveron-down.svg';

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

        <div className='feature feature-create'>
          <div className="feature-picture-container">
            <img src={gymImage} alt="picture of people practice gym" className='features-picture' />
          </div>
          <div className='feature-content'>
            <h4 className='feature-title'>Créer vos événements</h4>
            <p className='feature-subtitle'><span className='feature-subtitle-text'>Engagez vous dans la communauté My Partner Outdoor</span><span className='feature-subtitle-text'>Expert ou débutant, partager vos envies et ne faites plus vos activités seules</span></p>
            <Button className={"landing-button btn-green"} onClick={handleClickRegister}>Je me lance</Button>
          </div>
        </div>

        <div className='feature feature-join'>
          <div className='feature-content '>
            <h4 className='feature-title'>Participer aux événements</h4>
            <p className='feature-subtitle'><span className='feature-subtitle-text'>Pratiquer vos sports favoris à plusieurs</span> <span className='feature-subtitle-text'>Découvrer d’autres sports avec d’autres pratiquants</span></p>
            <Button className={"landing-button btn-green"} onClick={handleClickEvent}>Je découvre</Button>
          </div>
          <div className="feature-picture-container">
            <img src={footballImage} alt="picture of football goalkeeper" className='features-picture' />
          </div>
        </div>

        <div className='feature feature-meet'>
          <div className="feature-picture-container">
            <img src={pushUpImage} alt="picture of people pratice push up" className='features-picture' />
          </div>
          <div className='feature-content'>
            <h4 className='feature-title'>Faites des rencontres sportives</h4>
            <p className='feature-subtitle'>Connectez-vous avec des personnes partageant les mêmes intérêts
              sportifs que vous.</p>
            <Button className={"landing-button btn-green"} onClick={handleClickEvent}>En savoir plus</Button>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className='landing-register'>
        <h3 className="landing-register-title">Inscrivez-vous gratuitement et trouvez votre partenaire de sport idéal en quelques clics seulement</h3>
        <Button className={"landing-button btn-green"} onClick={handleClickRegister}>Let's go</Button>
      </section>

    </main>
  );
}
