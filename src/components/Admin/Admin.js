import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Language from "../Header/Language";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logOut } from "../../services/apiService";
import { doLogout } from '../../redux/action/userAction';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Admin = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    const [collapsed, setCollapsed] = useState(false);
    const account = useSelector(state => state.user.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <span onClick={() => setCollapsed(!collapsed)}>
                        <FaBars className="left-side" />
                    </span>
                    <div className="right-side">
                        <Language />
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLogOut()}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>

                <div className="admin-main">
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    )
}
export default Admin;