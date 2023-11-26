import React from "react";
class DisplayInfo extends React.Component {
    render() {
        //props => properties 

        //destructuring array/object
        const { listUser } = this.props;
        console.log(listUser)
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My name's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default DisplayInfo;