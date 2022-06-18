import React from "react";
import CompA from "./CompA";
 function MainComponent() {
  let userInfo = {
    userName: "Bibeka",
    email: "knightwalkers90@gmail.com",
  };
  return (
    <>
      <h1>MainComponent</h1>
      <pre>{JSON.stringify(userInfo)}</pre>
      <CompA  userInfo={userInfo}/>
    </>
  );
};
export default MainComponent;
