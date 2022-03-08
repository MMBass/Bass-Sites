import React, { useState } from 'react';

export const UtilsContext = React.createContext(undefined);

export default function UtilsContextProvider(props) {
    const [currPage, setCurrPage] = useState('home');
    const [mainColor, setMainColor] = useState('#0063B1');

    const handleSetCurrPage = (name) => {
        setCurrPage(name);

        switch (name.toLowerCase()) {
            case "home":
                setMainColor('#0063B1');
                break;
            case "wordpress-plugins":
                setMainColor('#7670C6');
                break;
            case "projects":
                setMainColor('#E75802');
                break;
            default:
                break;
        }
    }

    const utils = { currPage, mainColor };
    const actions = { handleSetCurrPage };

    return (
        <UtilsContext.Provider value={{ ...utils, ...actions }}>
            {props.children}
        </UtilsContext.Provider>
    );
};
