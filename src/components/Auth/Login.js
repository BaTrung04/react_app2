import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    //check email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }
        if (!password) {
            toast.error('Invalid password')
            return;
        }
        setIsLoading(true);
        //submit apis
        let data = await postLogin(email, password);
        if (data && +data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);

        }
    }
    const handleKeyDown = (event) => {
        if (event && event.key === "Enter") {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>

            <div className='title col-3 mx-auto'>
                REACT_BTrung
            </div>
            <div className='welcome col-3 mx-auto'>
                Hello, who’s this?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        placeholder="Email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <div className='input-password'>
                        <input
                            type={isShowPassword ? 'text' : 'password'}
                            className='form-control'
                            value={password}
                            placeholder="password"
                            onChange={(Event) => setPassword(Event.target.value)}
                            onKeyDown={(event) => handleKeyDown(event)}
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
                <div className='forget-password'>Forgot password ?</div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner10 className="loader-icon" />}
                        <span>Login</span>
                    </button>
                </div>
                <div className='text-left' >
                    <span onClick={() => { navigate('/') }}>&lt;&lt;Go to Homepage</span>
                </div>

            </div>

        </div>
    )
}

export default Login;