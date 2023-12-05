import { useState } from 'react';
import Select from 'react-select';
import './Question.scss';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import _, { iteratee } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const Questions = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});

    const [questions, setQuestion] = useState(
        [
            {
                id: uuidv4(),
                description: 'questions 1',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: 'answers 1',
                        isCorrect: false
                    }
                ]
            },
        ]
    );

    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion = {

                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    }
                ]

            }
            setQuestion([...questions, newQuestion]);
        }

        if (type === 'REMOVE') {
            let questionsClone = _.cloneDeep(questions);
            questionsClone = questionsClone.filter(item => item.id !== id);
            setQuestion(questionsClone);

        }
    }

    const handleAddRemoveAnswer = (type, questionId, answerId) => {
        let questionsClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnswers = {
                id: uuidv4(),
                description: '',
                isCorrect: false
            };

            let index = questionsClone.findIndex(item => item.id === questionId);
            console.log('index: ', index)
            questionsClone[index].answers.push(newAnswers);
            setQuestion(questionsClone);

            //  setQuestion([...questions, newQuestion]);
        }
        if (type === 'REMOVE') {
            let index = questionsClone.findIndex(item => item.id === questionId);
            questionsClone[index].answers = questionsClone[index].answers.filter(item => item.id !== answerId);
            setQuestion(questionsClone);

        }
        // if (type === 'REMOVE') {
        //     let questionsClone = questions;
        //     questionsClone = questionsClone.filter(item => item.id !== id);
        //     setQuestion(questionsClone);

        // }
        console.log('>>check: ', type, questionId, answerId)
    }
    console.log('question:', questions)
    return (
        <div className="question-container">
            <div className='title'>
                Manage Questions
            </div>
            <hr></hr>
            <div className='add-new-question '>
                <div className=' form-group col-6 '>
                    <label className='mb-2'>Select Quiz</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add question:
                </div>
                {
                    questions && questions.length > 0
                    && questions.map((question, index) => {
                        return (
                            <div key={question.id} className='q-main mb-4'>
                                <div className='question-content'>
                                    <div className="form-floating description">
                                        <input
                                            type="type"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            value={question.description}
                                        />
                                        <label >Question{index + 1}'s description</label>
                                    </div>
                                    <div className='group-upload'>
                                        <label ><RiImageAddFill className='label-upload' /></label>
                                        <input type={'file'} hidden />
                                        <span>0 file is upload</span>
                                    </div>
                                    <div className='btn-add'>
                                        <span onClick={() => handleAddRemoveQuestion('ADD', '')}> <AiOutlinePlusCircle className='icon-add' /></span>
                                        {questions.length > 1 &&
                                            <span onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}>
                                                <AiOutlineMinusCircle className='icon-remove' />
                                            </span>
                                        }
                                    </div>
                                </div>
                                {
                                    question.answers && question.answers.length > 0
                                    && question.answers.map((answer, index) => {
                                        return (
                                            <div key={answer.id} className='answers-content'>
                                                <input
                                                    className="form-check-input iscorrect"
                                                    type="checkbox"
                                                />
                                                <div className="form-floating answer-name">
                                                    <input
                                                        type="type"
                                                        className="form-control"
                                                        placeholder="name@example.com"
                                                        value={answer.description}
                                                    />
                                                    <label >Answers {index + 1}</label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span onClick={() => handleAddRemoveAnswer('ADD', question.id)}> <AiOutlinePlusCircle className='icon-add' /></span>

                                                    {question.answers.length > 1 &&
                                                        <span
                                                            onClick={() => handleAddRemoveAnswer('REMOVE', question.id, answer.id)}>
                                                            <AiOutlineMinusCircle className='icon-remove' />
                                                        </span>
                                                    }
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}
export default Questions;