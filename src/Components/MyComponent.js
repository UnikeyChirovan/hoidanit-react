import React, { useState } from "react";
import AddUserInfo from "./AddUserinfo";
import DisplayInfo from "./DisplayInfo";
// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Hoang Anh", age: "41" },
//       { id: 2, name: "Cáo", age: "31" },
//       { id: 3, name: "Unikey", age: "10" },
//     ],
//   };
//   handleAddNewUser = (newUser) => {
//     this.setState({
//       listUser: [newUser, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUser: listUserClone,
//     });
//   };
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfo
//             listUser={this.state.listUser}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }
const MyComponent = (props)=>{
  const [listUser,setlistUser] = useState(
    [
      { id: 1, name: "Hoang Anh", age: "41" },
      { id: 2, name: "Cáo", age: "31" },
      { id: 3, name: "Unikey", age: "10" },
    ]
  )

 const handleAddNewUser = (newUser) => {
  setlistUser([newUser, ...listUser])
    // this.setState({
    //   listUser: [newUser, ...this.state.listUser],
    // });
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setlistUser(listUserClone)
    // this.setState({
    //   listUser: listUserClone,
    // });
  };
      return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo
            listUser={listUser}
            handleDeleteUser={handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
}
export default MyComponent;
