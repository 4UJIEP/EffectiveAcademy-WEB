import { FC, useState } from "react";
import { Character, Comic } from "../types/data";
import Card from "../components/card";


const FavouritesPage: FC = () =>
{
    const [favourites] = useState<(Character | Comic)[]>(() => {
        return JSON.parse(localStorage.getItem("favourites") || "[]");
    });
    return (        
        <>
            <section className='main-section'>
                <div className='favourites-header'>
                    <p className='page-name'>Favourites</p>
                    <p className='page-count'>({favourites.length})</p>
                </div>
                <>
                    {favourites.length !== 0 ?
                    <section className='cards'>
                        {favourites.map((char) => (
                            <Card page = {char}/>
                        ))}
                    </section>
                    : <div className='loadings'>You don't have favourite pages</div>
                    }
                </>
            </section>
        </>
    );
}

export default FavouritesPage;