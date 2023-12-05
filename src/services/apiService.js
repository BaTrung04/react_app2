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

//tao bai quiz
const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant');

}

//them chi tiet bai quiz
const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

// api nop bai
const postSubmitQuiz = (data) => {
    return axios.post(`api/v1/quiz-submit`, { ...data })

}

//api them quiz
const postCreateNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.post('api/v1/quiz', data);

}

const getAllQuizForAdmin = () => {
    return axios.get(`/api/v1/quiz/all`)
}


const putUpdateQuizForAdmin = (id, name, description, difficulty, image) => {
    const data = new FormData();
    data.append('id: ', id);
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return axios.post('/api/v1/quiz', data);
}

const DeleteQuizForAdmin = (id) => {
    return axios.delete(`/api/v1/quiz/${id}`);
}
export {
    postCreateNewUser, getAllUsers, putUpdateUser, putUpdateQuizForAdmin,
    DeleteUser, getUserWithPaginate, postLogin, postRegister, DeleteQuizForAdmin,
    getQuizByUser, getDataQuiz, postSubmitQuiz, postCreateNewQuiz, getAllQuizForAdmin
}