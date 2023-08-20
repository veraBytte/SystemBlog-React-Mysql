import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) => {
         const res = await axios.post("http://localhost:3001/api/auth/login", inputs);
        setCurrentUser(res.data); // Guardar solo la información necesaria
    }

    const logout = async(inputs) => {
        await axios.post("http://localhost:3001/api/auth/logout", inputs);
       setCurrentUser(null);
   }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);    

   return (
       <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
       </AuthContext.Provider>
   );
}
