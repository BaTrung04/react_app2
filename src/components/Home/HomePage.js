import { Button } from 'react-bootstrap';
import videoHomepage from '../../assets/hero.mp4';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const navigate = useNavigate();

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
                            Forms
                            that break
                            the norm
                        </div>
                        <div className='title-2'>
                            Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.
                        </div>
                        <div className='title-3'>
                            {isAuthenticated === false ?
                                <button onClick={() => navigate('/login')}>Get started—it's free</button>
                                : <button onClick={() => navigate('/users')}>Doing Quiz Now</button>
                            }
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default HomePage;