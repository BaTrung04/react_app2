//class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: 'BaTrung', age: 21 },
            { id: 2, name: 'Join', age: 22 },
            { id: 3, name: 'eric', age: 21 }
        ]
    }
    //JXS
    render() {
        //DRY: don't repeat youseft
        return (
            <div>
                <UserInfo />
                <br />
                <DisplayInfo listUser={this.state.listUser} />.
            </div>

        )
    }
}

export default MyComponent;