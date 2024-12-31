// src/context/AppContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Create a context for managing global state
const AppContext = createContext();

// AppContextProvider component to wrap around the app and provide context to all components
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // User state
  const [companies, setCompanies] = useState([]);  // Admin can manage companies

  const loginUser = (userData) => {
    setUser(userData);  // Set logged in user data
  };

  const logoutUser = () => {
    setUser(null);  // Clear user data on logout
  };

  const addCompany = (company) => {
    setCompanies((prevCompanies) => [...prevCompanies, company]);  // Add a new company
  };

  const removeCompany = (companyId) => {
    setCompanies((prevCompanies) => prevCompanies.filter((company) => company.id !== companyId));  // Remove a company by ID
  };

  return (
    <AppContext.Provider value={{ user, loginUser, logoutUser, companies, addCompany, removeCompany }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext in components
export const useAppContext = () => {
  return useContext(AppContext);
};
