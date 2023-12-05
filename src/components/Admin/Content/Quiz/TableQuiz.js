import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalEditQuiz from "./ModalEditQuiz";
import ModalDeleteQuiz from "./ModalDeleteQuiz";

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);

    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [dataDelete, setDataDelete] = useState({});

    const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    useEffect(() => {
        fetchQuiz();
    }, [])


    const fetchQuiz = async () => {
        setDataDelete({});
        let res = await getAllQuizForAdmin()
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }

    const handleDelete = (quiz) => {
        console.log('quiz', quiz)
        setDataDelete(quiz);
        setShowModalDeleteQuiz(true);
    }
    const handleClickBtnEditQuiz = (quiz) => {
        console.log('quiz:', quiz)
        setShowModalUpdateQuiz(true);
        setDataUpdate(quiz);
    }

    return (
        <>
            <div style={{ fontSize: " 15px " }}>List Quizzes:</div>
            <table className="table table-hover table-bordered mt-2 my-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index}`}>
                                    <td >{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td style={{ display: "flex", gap: "5px" }}>
                                        <button
                                            className="btn btn-warning "
                                            onClick={() => handleClickBtnEditQuiz(item)}
                                        >Edit</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <ModalEditQuiz
                show={showModalUpdateQuiz}
                setShow={setShowModalUpdateQuiz}
                dataUpdate={dataUpdate}
                fetchQuiz={fetchQuiz}
            />
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                dataDelete={dataDelete}
                fetchQuiz={fetchQuiz}
            />
        </>
    )
}


export default TableQuiz;
