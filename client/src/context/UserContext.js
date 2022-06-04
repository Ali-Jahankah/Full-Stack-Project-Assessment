import React, { createContext } from "react";

const UserContext = createContext({
  data: [],
  setData: () => {},
});

export default UserContext;
