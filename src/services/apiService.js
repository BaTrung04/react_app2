import axios from "../utils/axiosCustomize";

//api add user
const postCreateNewUser = (email, password, username, role, image) => {
    //submit
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}


//api update
const putUpdateUser = (id, username, role, image) => {
    //submit
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
//api all user
const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

// api xoa
const DeleteUser = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } });
}

//so trang
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

// api login
// const postLogin = (email, password) => {
//     return axios.post(`api/v1/login`, {email ,password}); 
// }
const postLogin = (userEmail, userPassword) => {
    return axios.post(`api/v1/login`, {
        email: userEmail,
        password: userPassword,
        delay: 3000
    });
}

//api register
const postRegister = (email, password, username) => {
    return axios.post(`api/v1/register`, { email, password, username })
}






export { postCreateNewUser, getAllUsers, putUpdateUser, DeleteUser, getUserWithPaginate, postLogin, postRegister }