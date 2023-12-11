import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
  Nombre: '',
  Apellido: '',
  Edad: '',
  Alergias: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUserData = (data) => {
    dispatch({ type: 'SET_USER_DATA', payload: data });
  };

  return (
    <UserContext.Provider value={{ state, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};