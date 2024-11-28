import React from "react";
import charsStore from "../stores/CharactersStore";
import comicsStore from "../stores/ComicsStore";

type PaginationProps = 
{
    total: number;
    limit: number;
    offset: number;
    type: string;
}



const Pagination: React.FC<PaginationProps> = ({total, limit, offset, type}) =>
{
    const totalPages = Math.ceil(total / limit);

    const previousPage = () => 
    {
        if (Math.floor(offset / limit) > 0) 
        {
            if (type === "characters") 
            {
                charsStore.params.offset =
                (Math.floor(offset / limit) - 1) * limit;
                charsStore.getCharactersList();
            } 
            else if (type === "comics") 
            {
                comicsStore.params.offset = (Math.floor(offset / limit) - 1) * limit;
                comicsStore.getComicsList();
            }
        }
    }

    const nextPage = () =>
    {
        if (Math.floor(offset / limit) < totalPages) 
        {
            if (type === "characters") 
            {
                charsStore.params.offset =
                (Math.floor(offset / limit) + 1) * limit;
                charsStore.getCharactersList();
            } 
            else if (type === "comics") 
            {
                comicsStore.params.offset = (Math.floor(offset / limit) + 1) * limit;
                comicsStore.getComicsList();
            }
        }
    }

    return (
        <div  className="pagination">
            <button onClick={previousPage} disabled = {Math.floor(offset / limit) === 0}>&lt;</button>
            <span>{`${total > 0 ? Math.floor(offset / limit) + 1 : 0} / ${totalPages}`}</span>
            <button onClick={nextPage} disabled = {Math.floor(offset / limit) === totalPages}>&gt;</button>
        </div>
    );
}

export default Pagination;