import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const Context = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default Context;
