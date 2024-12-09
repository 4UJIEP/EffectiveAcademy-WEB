import { useCallback, useEffect, useState } from "react";
import charsStore from "../stores/CharactersStore";
import comicsStore from "../stores/ComicsStore";
import useDebounce from "../hooks/useDebounce";

type SearchProps = {
    placeholder: string;
    type: string;
}



const Search = ({placeholder, type}: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedQuery = useDebounce<string>(searchTerm, 1500);
    const [isChange, setIsChange] = useState(false);

    const sendRequest = useCallback((searchQuery: string): void => 
    {
        if (type === "characters") 
        {
            if (searchQuery) 
            {
                charsStore.params.nameStartsWith = searchQuery;
            } 
            else 
            {
                charsStore.params = {limit: 100};
            }
            charsStore.characters = [];
            charsStore.getCharactersList();
        } 
        else if (type === "comics") 
        {
            if (searchQuery) 
            {
                comicsStore.params.titleStartsWith = searchQuery;
            }
            else 
            {
                comicsStore.params = {limit: 100};
            }
            comicsStore.comics = [];
            comicsStore.getComicsList();
        }
    }, [type]);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        if (type === "characters") 
        {
            charsStore.params.offset = undefined;
        } 
        else if (type === "comics") 
        {
            comicsStore.params.offset = undefined;
        }
        setIsChange(true);
        setSearchTerm(e.target.value);
    };

    useEffect(() => { if (isChange) { sendRequest(debouncedQuery);}}, [debouncedQuery, sendRequest, isChange]);

    return (
        <div className='search-block'>
        <input type='text' placeholder={placeholder} value = {searchTerm} onChange={inputChange}/>
        </div>
    );
}

export default Search;
