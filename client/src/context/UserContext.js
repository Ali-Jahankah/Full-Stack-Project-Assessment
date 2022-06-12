import { createContext } from "react";

const UserContext = createContext({
  data: [],
  setData: () => {},
  rate: 0,
  setRate: () => {},
  removeVideoHandler: () => {},
  searchBtn: false,
  setSearchBtn: () => {},
  addVideoHandler: () => {},
  preloader: false,
  setPreloader: () => {},
  newVideo: false,
  setNewVideo: () => {},
  searchHandler: () => {},
  sorting: () => {},
});

export default UserContext;
