import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaPlusCircle } from "react-icons/fa";
import './Profile.scss'
import logo from '../../assets/bg2.jpg';
import { postUpdateProfile } from "../../services/apiService";
import Userinfo from "./UserInfo";
const Profile = (props) => {
    const { show, setShow, } = props;
    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>User information management</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab
                            eventKey="MainInfo"
                            title="Main Infor">
                            <Userinfo />
                        </Tab>

                        <Tab eventKey="password" title="Password">

                        </Tab>
                        <Tab eventKey="history" title="History" >

                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Profile;