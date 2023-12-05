import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { putUpdateQuizForAdmin } from '../../../../services/apiService';
import { useEffect } from 'react';
import _ from 'lodash';


const ModalEditQuiz = (props) => {
    const { show, setShow, dataUpdate } = props;
    //const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setName('')
        setDescription('')
        setType('')
        setImage('')
        setPreviewImage('');
        props.resetUpdateData();
    }
    const handleShow = () => {
        setShow(true)
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setDescription(dataUpdate.description)
            setName(dataUpdate.name)
            setType(dataUpdate.difficulty)
            setImage('')
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);

            }
            console.log('>>check render: dataupdate', dataUpdate)


        }
    }, [dataUpdate]);
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        }
        else {
            // setPreviewImage('');
        }
    }

    const handleSubmitCreateQuiz = async () => {
        //validate

        let data = await putUpdateQuizForAdmin(dataUpdate.id, name, description, type, image)
        console.log(">> interceptor: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchQuiz();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }

    }

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
                    <Modal.Title>Update A Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="name"
                                className="form-control"
                                value={name}

                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setType(event.target.value)}>
                                <option value='EASY'>EASY</option>
                                <option value='MEDIUM' >MEDIUM</option>
                                <option value='HARD' >HARD</option>
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

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateQuiz()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditQuiz;
