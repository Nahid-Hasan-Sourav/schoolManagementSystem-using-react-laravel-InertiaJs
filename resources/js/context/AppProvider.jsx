import React, { createContext } from 'react';

export const AppContext=createContext()

const AppProvider = ({children}) => {


    const contextValue = {
       name:"hhjh"
      };
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;