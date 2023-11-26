//class component
//function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Ba Trung',
        address: 'Bac Ninh',
        age: 21
    };

    handleClickMe(event) {
        this.setState({})
    }
    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubMit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    //JXS
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.age} and I'm {this.state.address}
                <form onSubmit={(event) => this.handleOnSubMit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default MyComponent;