

/* Compnent */
import { TeamCard } from '../../components/TeamCard';

/* Image */
import teamPicture1 from 'src/assets/resource/fake-team.jpg';

/* Style */
import './styles.scss';

export const Team = () => {
  return (
    <div className="team">
      <header className="team-header">
        <h2 className="team-header-title">L'équipe My partner Outdoor</h2>
        <span className="team-header-subtitle">Découvrez l'équipe passionnée de My Partner Outdoor</span>
      </header>
      <div className="team-content">
        <TeamCard picture={teamPicture1} name="Jérôme" role="Product owner" github="github/link" linkedin="linkedin/link" />
        <TeamCard picture={teamPicture1} name="Soukina" role="Git master" github="github/link" linkedin="linkedin/link" />
        <TeamCard picture={teamPicture1} name="Sébastien" role="Référant Technique" github="github/link" linkedin="linkedin/link" />
        <TeamCard picture={teamPicture1} name="Antoine" role="Scrum master" github="github/link" linkedin="linkedin/link" />
        <TeamCard picture={teamPicture1} name="Baptiste" role="Lead Dev" github="github/link" linkedin="linkedin/link" />
      </div>
    </div>
  );
};
