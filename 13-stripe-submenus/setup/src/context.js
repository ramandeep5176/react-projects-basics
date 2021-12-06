import React, { useState, useContext } from "react";
import sublinks from "./data";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return <Appcontext.Provider>{children}</Appcontext.Provider>;
};
