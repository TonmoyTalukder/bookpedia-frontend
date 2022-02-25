import React, { createContext } from 'react';
import useUserInfo from '../../hooks/useUserInfo';


export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const allContexts = useUserInfo();
    return (
        <UserContext.Provider value={allContexts}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;