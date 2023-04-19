import { useEffect } from 'react';

/* Compnent */
import { TeamCard } from '../../components/TeamCard';

/* Image */
import teamPicture1 from 'src/assets/resource/fake-team.jpg';
import seb from 'src/assets/resource/seb.jpg';
import antoine from 'src/assets/resource/antoine.jpg';
import soukina from 'src/assets/resource/soukina.jpg';
import jerome from 'src/assets/resource/jerome.jpeg';
import baptiste from 'src/assets/resource/baptiste.jpg'

/* Style */
import './styles.scss';

export const Team = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="team">
      <header className="team-header">
        <h2 className="team-header-title">L'équipe My partner Outdoor</h2>
        <span className="team-header-subtitle">Découvrez l'équipe passionnée de My Partner Outdoor</span>
      </header>
      <div className="team-content">
        <TeamCard picture={jerome} name="Jérôme" role="Product owner" github="https://github.com/jeromeconton" linkedin="https://www.linkedin.com/in/jerome-conton/"/>
        <TeamCard picture={soukina} name="Soukina" role="Git master" github="https://github.com/Soukina-NOUNOU" linkedin="https://www.linkedin.com/in/soukina-nounou/" />
        <TeamCard picture={seb} name="Sébastien" role="Référant Technique" github="https://github.com/SebastienMercier91" linkedin="https://www.linkedin.com/in/sebastien-mercier-dev/" />
        <TeamCard picture={antoine} name="Antoine" role="Scrum master" github="https://github.com/AntoineDeZotti" linkedin="https://www.linkedin.com/in/antoine-de-zotti/" />
        <TeamCard picture={baptiste} name="Baptiste" role="Lead Dev" github="https://github.com/DebreeBaptiste" linkedin="https://www.linkedin.com/in/baptistedebree/" />
      </div>
    </div>
  );
};
