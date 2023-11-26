//class component
//function component
import React from "react";
import { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";


// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: 1, name: 'BaTrung', age: '18' },
//             { id: 2, name: 'Join', age: '22' },
//             { id: 3, name: 'eric', age: '25' }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         // let listUser = { ...this.state.listUser }
//         let listUsersClone = this.state.listUser;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUsersClone
//         })
//     }
//     //JXS
//     render() {
//         //DRY: don't repeat youseft
//         return (
//             <div>
//                 <AddUserInfo
//                     // handleAddNewUser: tham chieu || handleAddNewUser: goi 
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br />
//                 <DisplayInfor
//                     listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>

//         )
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'BaTrung', age: '18' },
        { id: 2, name: 'Join', age: '22' },
        { id: 3, name: 'eric', age: '25' }
    ]);


    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])

    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUser;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone);
        // this.setState({
        //     listUser: listUsersClone
        // })
    }
    return (
        <div>
            <AddUserInfo
                // handleAddNewUser: tham chieu || handleAddNewUser: goi 
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default MyComponent;