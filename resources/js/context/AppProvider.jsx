import React, { createContext, useState } from 'react';

export const AppContext=createContext()

const AppProvider = ({children}) => {

    //set state open modal start here
    const [isDisplayedModal, setIsDisplayedModal]    = useState(false);
   //set state open modal end here

   //depend on this state i will set the name of edit modal field name
   //if state is true then modal will show for update info
    const [editModalOpen,seteditModalOpen] = useState(true);

   //this is a common function for close modal when i will click close button on modal
   //it will change the state true to false and close modal
   const closeModal = () => {
    setIsDisplayedModal((prev) => !prev);

   };

    const contextValue = {
        isDisplayedModal,
        setIsDisplayedModal,
        closeModal,
        editModalOpen,
        seteditModalOpen,

      };
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
