import { react } from "@babel/types";
import React, { useState } from "react";

const DisplayInfor = (props) => {
    const { listUser } = props;
    //destructuring assignment
    const [isShowHideListUser, setShowHideListUser] = useState(true);


    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className="display-info-container">
            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : 'show list users'}
                </button>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <div>My name's {user.name}</div>
                                <div>My name's {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfor;