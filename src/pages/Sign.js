import React from "react";
import styled from "styled-components";

const Sign = () => {
  return <H1>Sign In/Up</H1>;
};

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export default Sign;

// import { Route, Routes, Navigate } from "react-router-dom";
// import Signup from "./sign_component/Signup/Signup";
// import Login from "./sign_component/Login/Login";
// import { AuthContextProvider } from "./sign_component/context/AuthContext";

// const Sign = () => {
//   const user = localStorage.getItem("token");

//   return (
//     <div>
//       <AuthContextProvider>
//         <Routes>
//           <Route path="/signup" exact element={<Signup />} />
//           <Route path="/login" exact element={<Login />} />
//           <Route path="/" element={<Navigate replace to="/login" />} />
//         </Routes>
//       </AuthContextProvider>
//     </div>
//   );
// };

// export default Sign;
