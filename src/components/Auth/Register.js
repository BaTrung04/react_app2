import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss'
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Language from '../Header/Language';
import { useTranslation, Trans } from 'react-i18next';


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        } if (!username) {
            toast.error('Invalid username')
            return;
        }
        let data = await postRegister(email, password, username)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }





    return (
        <div className="register-container">
            <div className='header'>
                <span>{t('register.header')}</span>
                <button onClick={() => navigate('/login')}>{t('register.login')}</button>
                <Language />
            </div>
            <div className='title col-3 mx-auto'>
                REACT_BTrung
            </div>
            <div className='welcome col-3 mx-auto'>
                {t('register.title')}
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>{t('register.form.email')} (*)</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        placeholder="Email"
                        onChange={(Event) => setEmail(Event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>{t('register.form.password')} (*)</label>
                    <div className='input-password'>
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            className='form-control'
                            value={password}
                            placeholder="password"
                            onChange={(Event) => setPassword(Event.target.value)}
                        />
                        {isShowPassword ?
                            <span className='icons-eye '
                                onClick={() => setIsShowPassword(false)}>
                                <FaEye />
                            </span>
                            :
                            <span className='icons-eye '
                                onClick={() => setIsShowPassword(true)}
                            >
                                <FaEyeSlash />
                            </span>
                        }

                    </div>
                </div>
                <div className='form-group'>
                    <label>{t('register.form.username')} (*)</label>
                    <input
                        type={'username'}
                        className='form-control'
                        value={username}
                        placeholder="username"
                        onChange={(Event) => setUsername(Event.target.value)}


                    />
                </div>
                <button
                    className='btn-submit'
                    onClick={() => handleRegister()}

                >
                    {t('register.form.register')}
                </button>
                <div className='text-left' >
                    <span onClick={() => { navigate('/') }}>&lt;&lt;{t('register.form.homepage')}</span>
                </div>
            </div>

        </div>

    )
}
export default Register;