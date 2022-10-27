import React, {createContext, useState, useContext} from 'react';

export const cannoliContext = createContext({});

export function useCannoliContext() {
    return useContext(cannoliContext);
}

export default function CannoliContextProvider({children}) {
    const [cannoli, setCannoli] = useState('');
    const [cannoliList, setCannoliList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [glutenfree, setGlutenFree] = useState([]);
    const [vegan, setVegan] = useState([]);
    const [giftbox, setGiftBox] = useState([]);


    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');

    const [letter, setLetter] = useState('A');
    const [numberToLetter, setNumberToLetter] = useState(1);

    const data = {
        cannoli,
        setCannoli,
        cannoliList,
        setCannoliList,
        searchResult,
        setSearchResult,
        ingredientList,
        setIngredientList,
        glutenfree,
        setGlutenFree,
        vegan,
        setVegan,
        giftbox,
        setGiftBox,
        searchText,
        setSearchText,
        errorMessage,
        setErrorMessage,
        loading,
        setLoading,
        pageTitle,
        setPageTitle,
        letter,
        setLetter,
        numberToLetter,
        setNumberToLetter
    };

        return (<CannoliContext.Provider value={data}>
                {children}
            </CannoliContext.Provider>
        );
}