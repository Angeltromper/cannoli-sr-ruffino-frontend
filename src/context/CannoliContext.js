import React, {createContext, useState, useContext, useSyncExternalStore} from 'react';

export const cannoliContext = createContext({});

export function useCannoliContext() {
    return useContext(cannoliContext);
}

export default function CannoliContextProvider({children}) {
    const [cannoli, setCannoli] = useState('');
    const [cannoliList, setCannoliList] = useState([]);
    const [giftbox, setGiftbox] = useState([]);
    const [glutenfree, setGlutenfree] = useState([]);
    const [glutenfreeList, setGlutenfreeList] = useState([]);
    const [snack, setSnack] = useState([]);
    const [snackList, setSnackList] =useState([]);
    const [vegan, setVegan] = useState([]);
    const [veganList, setVeganList] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [priceList, setPriceList] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [searchText, setSearchText] = useState('');

    const[letter, setLetter] = useState('A');
    const[numberToLetter,setNumberToLetter] = useState(1);

const data = {
    cannoli,
    setCannoli,
    cannoliList,
    setCannoliList,
    giftbox,
    setGiftbox,
    glutenfree,
    setGlutenfree,
    glutenfreeList,
    setGlutenfreeList,
    snack,
    setSnack,
    snackList,setSnackList,
    vegan,
    setVegan,
    veganList,
    setVeganList,
    ingredientList,
    setIngredientList,
    priceList,
    setPriceList,
    errorMessage,
    setErrorMessage,
    loading,
    setLoading,
    pageTitle,
    setPageTitle,
    searchText,
    setSearchText,
    letter,
    setLetter,
    numberToLetter,
    setNumberToLetter
};

    return (<cannoliContext.Provider value={data}>
            {children}
        </cannoliContext.Provider>
    );
}