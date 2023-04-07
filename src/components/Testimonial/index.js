/* Tools */
import { useEffect, useRef, useState } from 'react';

/* Component */
import { Button } from '../Button';

/* Image */
import testimonialFirstImage from 'src/assets/resource/testimonial-1.png';
import testimonialSecondImage from 'src/assets/resource/testimonial-2.png';
import testimonialThirdImage from 'src/assets/resource/testimonial-3.png';

/* style */
import './styles.scss';

export const Testimonial = () => {

  const [activeTab, setActiveTab] = useState(0);

  const testimonialRef = useRef(null);

  const firstTestimonial = useRef(null);
  const clickFirstButtonHandler = () => firstTestimonial.current.scrollIntoView({ block: 'nearest', inline: 'center' });

  const secondTestimonial = useRef(null);
  const clickSecondButtonHandler = () => secondTestimonial.current.scrollIntoView({ block: 'nearest', inline: 'center' });

  const thirdTestimonial = useRef(null);
  const clickThirdButtonHandler = () => thirdTestimonial.current.scrollIntoView({ block: 'nearest', inline: 'center' });

  useEffect(() => {

    const intersectionHandler = function (entries, tab) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          setActiveTab(tab);
        }
      });
    };

    const options = {
      root: testimonialRef.current,
      rootMargin: '0px',
      threshold: [0.49, 0.5, 0.51],
    };

    const firstTestimonialObserver = new IntersectionObserver(
      (entries) => intersectionHandler(entries, 0),
      options
    );
    const secondTestimonialObserver = new IntersectionObserver(
      (entries) => intersectionHandler(entries, 1),
      options
    );
    const thirdTestimonialObserver = new IntersectionObserver(
      (entries) => intersectionHandler(entries, 2),
      options
    );
    firstTestimonialObserver.observe(firstTestimonial.current);
    secondTestimonialObserver.observe(secondTestimonial.current);
    thirdTestimonialObserver.observe(thirdTestimonial.current);

  }, [firstTestimonial, secondTestimonial, thirdTestimonial]);



  return (
    <section ref={testimonialRef}>
      <div className='testimonials'>
        <div className='testimonial' >
          <div className='testimonial-card-container' ref={firstTestimonial}>
            <div className="testimonial-card">
              <img src={testimonialFirstImage} alt="profil picture" className='testimonial-card-picture' />
              <p className='testimonial-card-text'>“ J'adore cette application de rencontre sportive ! Cela m'a aidé à trouver
                des partenaires d'entraînement incroyables “ <span className='testimonial-card-author'>Sophie Dupont</span></p>
            </div>
          </div>
          <div className='testimonial-card-container' ref={secondTestimonial}>
            <div className="testimonial-card">
              <img src={testimonialSecondImage} alt="profil picture" className='testimonial-card-picture' />
              <p className='testimonial-card-text'>“ J'ai été impressionné par la variété d'événements sportifs proposés par cette application ” <span className='testimonial-card-author'>David Garcia</span></p>
            </div>
          </div>
          <div className='testimonial-card-container' ref={thirdTestimonial}>
            <div className="testimonial-card">
              <img src={testimonialThirdImage} alt="profil picture" className='testimonial-card-picture' />
              <p className='testimonial-card-text'>“ Enfin une application qui répond à mes besoins en tant que sportive solitaire. “ <span className='testimonial-card-author'>Laura Smith</span></p>
            </div>
          </div>
        </div>


      </div>
      <div className='testimonial-button-container'>
        <Button className={`testimonial-button ${activeTab === 0 ? 'active' : ''}`} onClick={clickFirstButtonHandler} />
        <Button className={`testimonial-button ${activeTab === 1 ? 'active' : ''}`} onClick={clickSecondButtonHandler} />
        <Button className={`testimonial-button ${activeTab === 2 ? 'active' : ''}`} onClick={clickThirdButtonHandler} />
      </div>
    </section>
  );
}
