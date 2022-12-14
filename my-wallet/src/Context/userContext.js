import { createContext, useState } from "react";

const userContext = createContext();

export function UserProv ({children}){
    const [user, setUser] = useState({});
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    );
}

export default userContext