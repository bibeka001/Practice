// import React, { useState } from "react";
// const NewForm = () => {
//   const [name, setName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [lastNameNew, setLastNameNew] = useState("");

//   const onInput = (event) => {
//     setName(event.target.value);
//   };

//   const onSubmits = (event) => {
//     setFullName(name);
//     event.preventDefault();
//     setLastNameNew(lastName);
//   };
//   const onInputTwo = (event) => {
//     setLastName(event.target.value);
//   };

//   return (
//     <>
//       <div className="main_div">
//         <form onSubmit={onSubmits}>
//           <div>
//             <h1>
//               Hello {fullName} {lastNameNew}
//             </h1>
//             <input
//               type="text"
//               placeholder="Enter Your First Name"
//               onChange={onInput}
//               value={name}
//             />
//             <br />
//             <input
//               type="text"
//               placeholder="Enter Your Last Name"
//               onChange={onInputTwo}
//               value={lastName}
//             />
//             <br />
//             <button type="submit">Submit Me</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewForm;

