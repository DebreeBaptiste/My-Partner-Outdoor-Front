/* Tool */
import { Link } from 'react-router-dom';

/* Image */
import githubIcon from 'src/assets/github.jpg';
import linkedinIcon from 'src/assets/linkedin.png';

/* Style */
import './styles.scss';

export const TeamCard = ({ picture, name, role, github, linkedin }) => {
  return (
    <div className="card-content-box">
      <div className='card-content-box-image-container'>
        <img src={picture} alt="team member" className='card-content-box-image' />
      </div>
      <div className="card-content-box-text">
        <h3 className="card-content-box-text-name">{name}</h3>
        <span className="card-content-box-text-role">{role}</span>
        <div className='card-content-box-link-container'>
          <Link to={linkedin} target="_blank" className="card-content-box-link">
            <img src={linkedinIcon} alt="linkedin" className="card-content-box-link-image" />
          </Link>
          <Link to={github} target="_blank" className="card-content-box-link">
            <img src={githubIcon} alt="github" className="card-content-box-link-image" />
          </Link>
        </div>
      </div>

    </div>
  )
}
