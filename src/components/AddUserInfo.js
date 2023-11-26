import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: '',
        age: ''
    };

    handleClickMe(event) {
        this.setState({})
    }
    handleOnChangeInput(event) {
        // bad code
        //this.state.age = event.target.value
        this.setState({
            name: event.target.value
        })

    }
    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })

    }
    handleOnSubMit(event) {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 1000) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div> My name is {this.state.name} - {this.state.age} and I'm from {this.state.address}
                < form onSubmit={(event) => this.handleOnSubMit(event)
                }>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    >
                    </input>
                    <button>Submit</button>
                    <br />
                    <label>Your age:  </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    >
                    </input>
                    <button>Submit</button>
                </form ></div>
        )
    }
}
export default AddUserInfo;