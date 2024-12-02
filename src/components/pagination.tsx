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
                charsStore.params.offset = (Math.floor(offset / limit) - 1) * limit;
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
                charsStore.params.offset = (Math.floor(offset / limit) + 1) * limit;
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
            <button onClick={previousPage} className = {(Math.floor(offset / limit) === 0) ? 'hidden'  : ''}>&lt;</button>
            <span>{`${total > 0 ? Math.floor(offset / limit) + 1 : 0} / ${totalPages}`}</span>
            <button onClick={nextPage} className = {(Math.floor(offset / limit) === totalPages) ? 'hidden'  : ''}>&gt;</button>
        </div>
    );
}

export default Pagination;