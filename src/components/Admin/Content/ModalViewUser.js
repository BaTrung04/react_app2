import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { putCreateNewUser } from '../../../services/apiService';
import _ from 'lodash';
import { useEffect } from 'react';



const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props;
    //const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUsername('')
        setRole('USER')
        setImage('')
        setPreviewImage('');
        props.resetUpdateData();
    }
    const handleShow = () => {
        setShow(true)
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email)
            setUsername(dataView.username)
            setRole(dataView.role)
            setImage('')
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);

            }
            console.log('>>check render: dataupdate', dataView)

        }
    }, [dataView]);
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
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
                                disabled
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                disabled
                                className="form-select"
                                onChange={(event) => setRole(event.target.value)}>
                                <option value='USER'>{dataView.role}</option>
                                <option value='ADMIN' >ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            {/* <label className='form-label label-upload' htmlFor='labelUpload' disabled={true} >
                                <FaPlusCircle /> Upload File Image
                            </label> */}
                            <input
                                type='file'
                                id='labelUpload'
                                hidden
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>preview image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;