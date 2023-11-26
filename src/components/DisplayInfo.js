import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //props => properties 

        //destructuring array/object
        const { listUser } = this.props;
        // console.log(listUser)

        return (
            <div>
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