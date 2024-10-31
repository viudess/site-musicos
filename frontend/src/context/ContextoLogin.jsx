import React, { createContext, useState } from 'react';

// Cria o contexto
export const UserContext = createContext();

export default function ContextoLogin({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <UserContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </UserContext.Provider>
    );
}