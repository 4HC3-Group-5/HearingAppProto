import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = React.useState({
        name: null,
    });

    // Definition of the global variable
    const value = {
        'user': user,
        'setUser': setUser
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
