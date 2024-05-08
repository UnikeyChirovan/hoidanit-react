import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   //JSX cho phép viết code của html trong js
//   state = {
//     name: "",
//     address: "",
//     age: "",
//   };
//   HandleClick(event) {
//     // console.log(`>>>Check my button`);
//     console.log(`>>>Check my button`);
//     console.log("my name is", this.state.name);

//     this.setState({
//       name: "Son Goku",
//       age: Math.floor(Math.random() * 30) + 1,
//     });
//   }
//   //   HandleOnMoveOver(event) {
//   //     console.log(event.pageX);
//   //   }
//   handleOnchangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnchangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and i am {this.state.age}
//         {/* <button onMouseOver={this.HandleOnMoveOver}>Hover Me</button> */}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your Name</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnchangeInput(event)}
//           />
//           <label>Your Age</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnchangeAge(event)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfo = (props)=>{
  //   state = {
  //   name: "",
  //   address: "",
  //   age: "",
  // };
  const [name,setName]=useState('');
  const [address,setAddress]=useState('Nha Cao');
  const [age,setAge]=useState('');
  // HandleClick(event) {
    // console.log(`>>>Check my button`);
    // console.log(`>>>Check my button`);
    // console.log("my name is", this.state.name);

    // this.setState({
    //   name: "Son Goku",
    //   age: Math.floor(Math.random() * 30) + 1,
    // });
  // }
  //   HandleOnMoveOver(event) {
  //     console.log(event.pageX);
  //   }
  const handleOnchangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value)
  };
  const handleOnchangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value)
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: name,
      age: age,
    });
  };
  return(
      <div>
        my name is {name} and i am {age}
        {/* <button onMouseOver={this.HandleOnMoveOver}>Hover Me</button> */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Name</label>
          <input
            value={name}
            type="text"
            onChange={(event) => handleOnchangeInput(event)}
          />
          <label>Your Age</label>
          <input
            value={age}
            type="text"
            onChange={(event) => handleOnchangeAge(event)}
          />
          <button>submit</button>
        </form>
      </div>
  )
}
export default AddUserInfo;
