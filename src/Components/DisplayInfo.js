import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowListUsers: true,
//     };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       document.title = "Truyện Cáo Viết";
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (this.props.listUser !== prevProps.listUser) {
//       if (this.props.length === 5) {
//         alert("you got 5 users");
//       }
//     }
//   }

//   handleShowHide = () => {
//     this.setState({
//       isShowListUsers: !this.state.isShowListUsers,
//     });
//   };
//   render() {
//     const { listUser } = this.props;
//     return (
//       <div className="display-info-container">
//         {/* <img src={logo} /> */}
//         <>
//           <span
//             onClick={() => {
//               this.handleShowHide();
//             }}
//           >
//             {this.state.isShowListUsers === true
//               ? "Ẩn Danh Sách"
//               : "Hiện Danh Sách"}
//           </span>
//         </>
//         {this.state.isShowListUsers && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={
//                     +user.age > 40 ? "green" : +user.age > 30 ? "red" : "blue"
//                   }
//                 >
//                   <div>
//                     <div> My name is {user.name}</div>
//                     <div> My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfo = (props)=>{
  const { listUser } = props; //object

  const [isShowListUsers, setShowListUsers] = useState(true);
  //Destructuring assignment
   const handleShowHide = () => {
    // this.setState({
    //   isShowListUsers: !this.state.isShowListUsers,
    // });
    setShowListUsers(!isShowListUsers);
  };
  console.log(">>>Call me render")
  //có thể viết nhiều useeffect để theo dõi
  useEffect(
    ()=>{
    setTimeout(()=>{
      document.title= "Truyện Cáo Viết"
    },3000)
    console.log(">>>Call me Effect")
  },[]
)
  return(
          <div className="display-info-container">
        {/* <img src={logo} /> */}
        <>
          <span
            onClick={() => {
              handleShowHide();
            }}
          >
            {isShowListUsers === true
              ? "Ẩn Danh Sách"
              : "Hiện Danh Sách"}
          </span>
        </>
        {isShowListUsers && (
          <>
            {listUser.map((user,index) => {
              return (
                <div
                  key={user.id}
                  className={
                    +user.age > 40 ? "green" : +user.age > 30 ? "red" : "blue"
                  }
                >
                  <div>
                    <div> My name is {user.name}</div>
                    <div> My age is {user.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
  )
}
export default DisplayInfo;
