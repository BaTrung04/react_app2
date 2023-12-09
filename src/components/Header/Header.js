import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../services/apiService';
import { toast } from 'react-toastify';
import { doLogout } from '../../redux/action/userAction';
import Language from './Language';
import { useTranslation, Trans } from 'react-i18next';
import { FaReact } from "react-icons/fa";
import { useState } from 'react';
import Profile from './Profile';

const Header = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [isShowModalProfile, setIsShowModalProfile] = useState(false);
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }

    const handleLogOut = async () => {
        let rs = await logOut(account.email, account.refresh_token);
        if (rs && rs.EC === 0) {
            //clear data redux
            dispatch(doLogout());
            navigate('/login');
        }
        else {
            toast.error(rs.EM);
        }
        // console.log("check res:", rs)
    }

    const handleProfile = () => {
        navigate()
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className='navbar-brand'>
                        <FaReact className='brand-icon' />
                        {t('header.title')}
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className='nav-link'>
                                {t('header.home')}
                            </NavLink>
                            <NavLink to="/users" className='nav-link'>
                                {t('header.users')}
                            </NavLink>
                            <NavLink to="/admins" className='nav-link'>
                                {t('header.admin')}
                            </NavLink>
                        </Nav>
                        <Nav>
                            <Language />
                            {isAuthenticated === false ?
                                <>
                                    <button className='btn-Login' onClick={() => handleLogin()}>{t('header.login')}</button>
                                    <button className='btn-Signup' onClick={() => handleRegister()} >{t('header.signup')}</button>
                                </>
                                :
                                <NavDropdown title={t('header.title1.setting')}
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => setIsShowModalProfile(true)} >{t('header.title1.profile')}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleLogOut()} >{t('header.title1.logout')}</NavDropdown.Item>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            <Profile
                show={isShowModalProfile}
                setShow={setIsShowModalProfile}
            />
        </>
    );
}

export default Header;