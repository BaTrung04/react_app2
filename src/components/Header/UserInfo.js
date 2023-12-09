import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import './UserInfo.scss';
const Userinfo = (props) => {
    const account = useSelector(state => state.user.account);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    useEffect(() => {
        if (account && !_.isEmpty(account)) {
            setEmail(account.email)
            setUsername(account.username)
            setRole(account.role)
            setImage('')
            if (account.image) {
                setPreviewImage(`data:image/jpeg;base64,${account.image}`);

            }

        }
    }, [account]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
        else {
            // setPreviewImage('');
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    // const handleSubmitUpdateProfile = async () => {
    //     //validate
    //     const isValidEmail = validateEmail(email);
    //     if (!isValidEmail) {
    //         toast.error('Invalid email')
    //         return;
    //     }


    // let data = await putUpdateUser(dataUpdate.id, username, role, image)
    // console.log(">> interceptor: ", data)
    // if (data && data.EC === 0) {
    //     toast.success(data.EM);
    //     handleClose();
    //     //await props.fetchListUser();
    //     // props.setCurrentPage(1);
    //     await props.fetchListUserWithPaginate(props.currentPage);
    // }
    // if (data && data.EC !== 0) {
    //     toast.error(data.EM);
    // }
    // }
    return (
        <>
            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    disabled
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    disabled
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="col-md-4">
                <label className="form-label">Role</label>
                <select className="form-select" onChange={(event) => setRole(event.target.value)}>
                    <option value='USER'>{account.role}</option>
                    <option value='ADMIN' >ADMIN</option>
                </select>
            </div>
            <div className='col-md-12'>
                <label className='form-label label-upload' htmlFor='labelUpload'>
                    <FaPlusCircle /> Upload File Image
                </label>
                <input
                    type='file'
                    id='labelUpload'
                    hidden
                    onChange={(event) => handleUploadImage(event)}
                />
            </div>
            <div className='col-md-12 img-preview'>
                {previewImage ?
                    <img src={previewImage} />
                    :
                    <span>preview image</span>
                }

            </div></>


    )
}

export default Userinfo;