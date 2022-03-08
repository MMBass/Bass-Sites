import React, { useState } from 'react';

export const LoadersContext = React.createContext(undefined);

export default function LoadersContextProvider(props) {
    const [loaders, setLoaders] = useState({
        main: { open: false, color: "primary" },
        circular: { open: false, color: "primary" },
    });

    const createLoader = (name, color) => {
        if (loaders.name) {
            setLoaders({ ...loaders, [name]: undefined });
        }
        setLoaders({ ...loaders, [name]: { open: false, color: color || "primary" } });
    }

    const toggleLoader = (name) => {
        if (loaders.name) {
            setLoaders({ ...loaders, [name]: { ...loaders.name, open: !loaders.name.open } });
        } else {
            console.error("Loader does'nt exist. Name: " + name);
        }
    }

    const actions = { createLoader, toggleLoader };

    return (
        <LoadersContext.Provider value={{ ...loaders, ...actions }}>
            {props.children}
        </LoadersContext.Provider>
    );
};
