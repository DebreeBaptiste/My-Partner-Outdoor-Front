import { Button } from '../../components/Button';

import bikeImage from 'src/assets/resource/mountain-bike.webp';
import footballImage from 'src/assets/resource/football.webp';
import pushUpImage from 'src/assets/resource/push-up.webp';
import gymImage from 'src/assets/resource/gym.jpg';
import testimonialFirstImage from 'src/assets/resource/testimonial-1.png';
import testimonialSecondImage from 'src/assets/resource/testimonial-2.png';
import testimonialThirdImage from 'src/assets/resource/testimonial-3.png';

import ArrowIcon from 'src/assets/icon-cheveron-down.svg';

/* Style */
import './styles.scss';

export const Landing = () => {
  return (
    <main className="landing-page">

      <section className='hero-section'>
        <div className='hero-content'>
          <h2 className='hero-content-title'>Trouver vos  partenaires pour vos activités sportives</h2>
          <p className='hero-content-subtitle'>Le réseau social des amoureux du sport</p>
          <Button className={"landing-button btn-green"} >Lancez-vous</Button>
          <span className='hero-content-text'>Faites le grand saut !</span>
        </div>
        <div className="hero-picture-container">
          <img src={bikeImage} alt="picture of mountains" className='hero-picture' />
        </div>
      </section>

      <section className="arrow-section">
        <img src={ArrowIcon} alt="arrow icon" className="arrow-icon" />
      </section>

      <section className='partner'>
        <h3 className='partner-title'>Trouver votre partenaire de sport idéal et relevez des défis ensemble</h3>
        <p className='partner-subtitle'>Vous cherchez une raison de bouger ? Notre réseau social de sport est l'endroit idéal pour commencer !</p>
      </section>


      <section className='features'>

        <div className='feature'>
          <div className="feature-picture-container">
            <img src={gymImage} alt="picture of people practice gym" className='features-picture event-picture' />
          </div>
          <div className='feature-content'>
            <h4 className='feature-title'>Créer vos événements</h4>
            <p className='feature-subtitle'><span className='feature-subtitle-text'>Engagez vous dans la communauté My Partner Outdoor</span><span className='feature-subtitle-text'>Expert ou débutant, partager vos envies et ne faites plus vos activités seules</span></p>
            <Button className={"landing-button btn-green"} >Je me lance</Button>
          </div>
        </div>

        <div className='feature'>
          <div className='feature-content'>
            <h4 className='feature-title'>Participer aux événements</h4>
            <p className='feature-subtitle'><span className='feature-subtitle-text'>Pratiquer vos sports favoris à plusieurs</span> <span className='feature-subtitle-text'>Découvrer d’autres sports avec d’autres pratiquants</span></p>
            <Button className={"landing-button btn-green"} >Je découvre</Button>
          </div>
          <div className="feature-picture-container">
            <img src={footballImage} alt="picture of football goalkeeper" className='features-picture join-picture' />
          </div>
        </div>

        <div className='feature'>
          <div className="feature-picture-container">
            <img src={pushUpImage} alt="picture of people pratice push up" className='features-picture meet-picture' />
          </div>
          <div className='feature-content'>
            <h4 className='feature-title'>Faites des rencontres sportives</h4>
            <p className='feature-subtitle'>Connectez-vous avec des personnes partageant les mêmes intérêts
              sportifs que vous.</p>
            <Button className={"landing-button btn-green"} >En savoir plus</Button>
          </div>
        </div>

      </section>

      <section className='testimonials'>
        <div className='testimonial'>
          <div className='testimonial-card'>
            <img src={testimonialFirstImage} alt="profil picture" className='testimonial-card-picture' />
            <p className='testimonial-card-text'>“ J'adore cette application de rencontre sportive ! Cela m'a aidé à trouver
              des partenaires d'entraînement incroyables “ <span className='testimonial-card-author'>Sophie Dupont</span></p>
          </div>
          <div className='testimonial-card'>
            <img src={testimonialSecondImage} alt="profil picture" className='testimonial-card-picture' />
            <p className='testimonial-card-text'>“ J'ai été impressionné par la variété d'événements sportifs proposés par cette application ” <span className='testimonial-card-author'>David Garcia</span></p>
          </div>
          <div className='testimonial-card'>
            <img src={testimonialThirdImage} alt="profil picture" className='testimonial-card-picture' />
            <p className='testimonial-card-text'>“ Enfin une application qui répond à mes besoins en tant que sportive solitaire. “ <span className='testimonial-card-author'>Laura Smith</span></p>
          </div>
        </div>

        <div className='testimonial-button-container'>
          <Button className='testimonial-button' />
          <Button className='testimonial-button' />
          <Button className='testimonial-button' />
        </div>

      </section>

      <section className='register'>
        <h3 className="register-title">Inscrivez-vous gratuitement et trouvez votre partenaire de sport idéal en quelques clics seulement</h3>
        <Button className={"landing-button btn-green"} >Let's go</Button>
      </section>

    </main>
  );
}
