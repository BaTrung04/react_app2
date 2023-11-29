import ModalCreateUser from "./ModalCreateUser";
import { FaLeaf, FaPlusCircle } from "react-icons/fa";
import './ManageUser.scss';
import TableUser from "./TableUser";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);


    const [listUsers, setListUsers] = useState([]);
    //componentDidMount
    useEffect(() => {
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    return (

        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FaPlusCircle />Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;