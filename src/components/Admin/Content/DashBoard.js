import './Dashboard.scss';
import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getOverview } from '../../../services/apiService';

const DashBoard = (props) => {
    const [dataOverview, setDataOverview] = useState([]);
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetchDataOverview();
    }, [])


    const fetchDataOverview = async () => {
        let res = await getOverview();
        if (res && res.EC === 0) {
            setDataOverview(res.DT);
            //process chart data
            let Qz = 0, Qs = 0, As = 0;
            Qz = res?.DT?.others?.countQuiz ?? 0;
            Qs = res?.DT?.others?.countQuestions ?? 0;
            As = res?.DT?.others?.countAnswers ?? 0;
            const data = [
                {
                    "name": 'Quizzes',
                    "Qz": Qz,
                },
                {
                    "name": 'Questions',
                    "Qs": Qs,
                },
                {
                    "name": 'Answers ',
                    "As": As,
                }

            ];
            setDataChart(data)
        }
    }

    return (
        <div className="dashboard-container">
            <div className='title'>
                Analytics DashBoard

            </div>
            <div className='content'>
                <div className='c-left'>
                    <div className='child'>
                        <span className='text-1'>Total Users</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.users
                                && dataOverview.users.total ?
                                <>{dataOverview.users.total}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Quizzes</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others
                                && dataOverview.others.countQuiz ?
                                <>{dataOverview.others.countQuiz}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Questions</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others
                                && dataOverview.others.countQuestions ?
                                <>{dataOverview.others.countQuestions}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Answers</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others
                                && dataOverview.others.countAnswers ?
                                <>{dataOverview.others.countAnswers}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>

                </div>
                <div className='c-right'>
                    <ResponsiveContainer width="95%" height="100%">
                        <BarChart
                            width={800}
                            height={500}
                            data={dataChart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Qz" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="Qs" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                            <Bar dataKey="As" fill="#fcb12a" activeBar={<Rectangle fill="gold" stroke="green" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;