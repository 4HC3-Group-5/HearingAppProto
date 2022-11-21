import React from "react";
import {useCookies} from "react-cookie";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [user, setUser] = React.useState({
        name: cookies.username ? cookies.username : null,
    });



    // Definition of the global variable
    const value = {
        'user': user,
        'setUser': (user) => {
            setUser(user);
            setCookie('username', user.name);
        }
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
