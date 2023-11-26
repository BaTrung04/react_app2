import React from "react";
import { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         address: '',
//         age: ''
//     };

//     handleClickMe(event) {
//         this.setState({})
//     }
//     handleOnChangeInput(event) {
//         // bad code
//         //this.state.age = event.target.value
//         this.setState({
//             name: event.target.value
//         })

//     }
//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })

//     }
//     handleOnSubMit(event) {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 1000) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div> My name is {this.state.name} - {this.state.age} and I'm from {this.state.address}
//                 < form onSubmit={(event) => this.handleOnSubMit(event)
//                 }>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     >
//                     </input>
//                     <button>Submit</button>
//                     <br />
//                     <label>Your age:  </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     >
//                     </input>
//                     <button>Submit</button>
//                 </form ></div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('By Ba Trung');
    const [age, setAge] = useState('');

    // const    handleClickMe =(event) => {
    //         setState({})
    //     }
    const handleOnChangeInput = (event) => {
        setName(event.target.value)

    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)

    }
    const handleOnSubMit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 1000) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div> My name is {name} - {age} and I'm from {address}
            < form onSubmit={(event) => handleOnSubMit(event)
            }>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                >
                </input>
                <br />
                <label>Your age:  </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                >
                </input>
                <button>Submit</button>
            </form >
        </div>
    )
}

export default AddUserInfo;