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

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}





export { postCreateNewUser, getAllUsers, putUpdateUser, DeleteUser, getUserWithPaginate }