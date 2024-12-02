import { Link } from 'react-router-dom';
import { Character, Comic } from '../types/data';
import { useEffect, useState } from 'react';

export default function Card(props: {page: Character | Comic})
{
    const page = props.page;
    if (page.description != null)
    {
        var sliced = page.description.slice(0,80);
        if (sliced.length < page.description.length) 
            {
            sliced += '...';
        }
    }
    else
    {
        sliced = page.description;
    }
    
    const[isFavourite, setFavourite] = useState(false);

    useEffect(() => 
    {
        const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
        const exists = favourites.some((item: Character | Comic) => item.id === props.page.id);
        setFavourite(exists);
    }, [props.page.id])

    const handleClick = () =>
    {
        const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
        const checkFavourite = favourites.some((item: Character | Comic) => item.id === props.page.id);

        if (!checkFavourite)
        {
            favourites.push(props.page);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            setFavourite(true);
        }
        else
        {
            const _favourites = favourites.filter((item: Character | Comic) => item.id !== props.page.id);
            localStorage.setItem("favourites", JSON.stringify(_favourites));
            setFavourite(false);
        }
    }

    return (
        <div className='card'>
            <div className={`feature-star ${isFavourite ? "active" : ""}`} onClick={handleClick}>★</div>
            <Link to = {'name' in page ? `/characters/${page.id}` : `/comics/${page.id}`}>
                <img src = {(page.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") ? 'no_image.jpg' : page.thumbnail.path + "." + page.thumbnail.extension}/>
                <p className="card-name">{'name' in page ? page.name : page.title}</p>
                <p className="card-desc">{sliced}</p>
                
            </Link>
        </div>
    );
}
