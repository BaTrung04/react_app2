import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select';


const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];


const ManageQuiz = (props) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState();
    const [image, setImages] = useState();


    const handelChangeFile = (event) => {

    }
    return (
        <div className="quiz-container">
            <div className="title">
                Manage Quizzes
            </div>
            <hr />
            <div className="add-new">
                <fieldset className="border rounded-3 p-3"  >
                    <legend className="float-none w-auto px-3">Add New Quiz </legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='your quiz name'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='description==='
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label for="floatingPassword">description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                            value={type}
                            //onChange={setSelectedOption}
                            options={options}
                            placeholder={'Quiz type....'}
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'>Upload Image</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={(event) => handelChangeFile(event)}
                        />
                    </div>
                </fieldset>
            </div>
            <div className="list-detail">
                table
            </div>
        </div>
    )
}
export default ManageQuiz;