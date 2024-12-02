import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import { Character } from "../types/data";

const CharacterPage = () => {

    const { characterId } = useParams();

    const [character, setCharacter] = useState<Character | null>(null);

    const getById = async (id: number | undefined) =>
    {
        if (id !== undefined)
        {
            await api.posts.getCharacter(id).then((res) => {setCharacter(res.data.results[0]);});
        }
        else
        {
            setCharacter(null);
        }
    }

    useEffect(() => {
       getById(Number(characterId));
    }, [characterId]);

    return (
        <section className='content-page'>
            <img src = {(character?.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") ? 'no_image.jpg' : character?.thumbnail.path + "." + character?.thumbnail.extension}/>
            <div className="content-info">
                <div className='content-name'>
                    <p className="name-text">{character?.name}</p>
                    <p>{character?.description}</p>
                </div>
                <div className="content-list name-text">
                    Comics
                    <div>
                        {character?.comics?.items && character.comics.items.map((comic) => (
                        <Link to={"/comics/" + comic.resourceURI?.split("/")[6]} key={comic.resourceURI?.split("/")[6]} className="link-to-object">
                            <p>{comic.name}</p>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharacterPage;