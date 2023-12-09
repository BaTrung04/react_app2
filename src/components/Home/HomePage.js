import { Button } from 'react-bootstrap';
import videoHomepage from '../../assets/hero.mp4';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className='homepage-container'>

            <Container>
                <div className='homepage-title'>
                    <video autoPlay muted loop className='video-homepage' >
                        <source
                            src={videoHomepage}
                            type='video/mp4'
                        >
                        </source>
                    </video>

                    <div className='homepage-content'>
                        <div className='title-1'>
                            {t('homepage.title1')}
                        </div>
                        <div className='title-2'>
                            {t('homepage.title2')}

                        </div>
                        <div className='title-3'>
                            {isAuthenticated === false ?
                                <button onClick={() => navigate('/login')}>
                                    {t('homepage.title3.login')}
                                </button>
                                : <button onClick={() => navigate('/users')}>
                                    {t('homepage.title3.doing')}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default HomePage;