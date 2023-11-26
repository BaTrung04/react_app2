import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import './DisplayInfo.scss'
import { timeout } from "q";
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log(">>call constructor: 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }


    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    //prevProps qua khu | prevState hien tai
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>> call me component did update', this.props, prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert('5 users')
            }
        }

    }

    componentDidMount() {
        console.log('>> call me component did mount')
        setTimeout(() => {
            document.title = "react_hook"
        }, 3000)
    }
    render() {
        console.log(">>call me render ")
        //props => properties 

        //destructuring array/object
        const { listUser } = this.props;
        // console.log(listUser)

        return (
            <div className="display-info-container">
                <div>
                    <button onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUser === true ? ' Hide list user' : ' Show list user'}
                    </button>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>My name's {user.name}</div>
                                    <div>My name's {user.age}</div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;