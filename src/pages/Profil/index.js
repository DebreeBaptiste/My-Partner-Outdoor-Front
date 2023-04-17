import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/* Api */
import { getOtherUserSport } from '../../api/userSport';
import { getOtherUser } from '../../api/getUser';
import { getOtherUserAddress } from '../../api/userAddress';

/* Component */
import { UserSport } from '../../components/UserSport/UserSport';

export const Profil = () => {

  const userId = useParams().id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetails.user);

  const userLogged = useSelector((state) => state.user.logged);


  useEffect(() => {
    if (!userLogged) {
      navigate('/')
    }

    if (parseInt(userId, 10) === JSON.parse(localStorage.getItem('userId'))) {
      navigate('/profil')
    }

    if (userLogged) {
      dispatch(getOtherUser(userId));
      dispatch(getOtherUserSport(userId));
      dispatch(getOtherUserAddress(userId));
    }

  }, [userLogged]);

  return <main className='profil-page'>

    <section className="profil">
      <h2 className='profil-title'>Profil de {user.pseudo}</h2>
      <div className='profil-content'>
        <div className='profil-user-container'>
          <div className='profil-user-picture-container'>
            <div className='profil-user-picture-wrapper'>
              <img src={user.picture} className='profil-user-picture' />

            </div>
          </div>

        </div>
        <div className='profil-user-info'>
          <p className='profil-user-pseudo'>{user.pseudo}</p>

          <p className='profil-user-ville'>{user.address.city}</p>

          <ul className='profil-user-sport-list'>
            {
              user.sport.map((sport) => (
                <UserSport sport={sport} key={`sportId-${sport.sport_id}`} />))
            }
          </ul>
        </div>
        <div className='profil-user-description'>
          <h6 className='profil-user-description-title'>Bio</h6>
          <p className='profil-user-description-text'>{user.bio}</p>
        </div>
      </div>


    </section>
  </main>
};
