import React, { createContext } from 'react';

export const AuthContext=createContext()

const AppProvider = ({children}) => {


    const contextValue = {
       name:"hhjh"
      };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AppProvider;