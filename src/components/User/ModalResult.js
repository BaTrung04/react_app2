import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult, handleShowAnswer } = props;
    const handleClose = () => setShow(false);
    const { t } = useTranslation();

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Your Result...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Question:: <b>{dataModalResult.countTotal} </b></div>
                    <div>Total Correct answers:: <b>{dataModalResult.countCorrect} </b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                        props.handleShowAnswer();
                    }}>
                        Show answers
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        handleClose
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;