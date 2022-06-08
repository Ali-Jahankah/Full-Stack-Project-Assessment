import React, { createContext } from "react";

const UserContext = createContext({
  data: [],
  setData: () => {},
  rate: 0,
  setRate: () => {},
  removeVideoHandler: () => {},
  searchBtn: false,
  setSearchBtn: () => {},
  addVideoHandler: () => {},
});

export default UserContext;
