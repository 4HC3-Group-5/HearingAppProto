import React from "react";
import {useCookies} from "react-cookie";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = React.useState({
        name: null,
    });

    const [userCookie, setUserCookie, removeUserCookie] = useCookies(['not used']);

    console.log(userCookie);

    setUserCookie('user', user);

    // Definition of the global variable
    const value = {
        'user': user,
        'setUser': setUser
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
