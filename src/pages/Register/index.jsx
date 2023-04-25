/* Tools */
import { useEffect } from 'react';
import { CreateUserForm } from '../../components/CreateUserForm';

/* Styles */
import './styles.scss';

export const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='register'>
      <div className='register-content'>

        <header className='register-header'>
          <h3 className='register-header-title'>Rejoignez l’aventure My Partner Outdoor</h3>
          <p className='register-header-subtitle'>Commencez dès demain à pratiquer les sports que vous aimez à plusieurs</p>
        </header>

        <CreateUserForm />
      </div>
    </section>
  );
};
