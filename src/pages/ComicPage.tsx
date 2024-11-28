import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Comic } from "../types/data";
import api from "../api";

const ComicPage = () => {
    const { comicId } = useParams();

    const [comic, setComic] = useState<Comic | null>(null);

    const getById = async (id: number | undefined) =>
        {
            if (id !== undefined)
            {
                await api.posts.getComic(id).then((res) => {setComic(res.data.results[0]);});
            }
            else
            {
                setComic(null);
            }
        }
    useEffect(() => {
        getById(Number(comicId));
    }, [comicId]);

    return (
        <>
            <section className='content-page'>
                <img src = {(comic?.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") ? 'no_image.jpg' : comic?.thumbnail.path + "." + comic?.thumbnail.extension}/>
                <div className="content-info">
                    <div className='content-name'>
                        <p className="name-text">{comic?.title}</p>
                        <p>{comic?.description}</p>
                    </div>
                    <div className="content-list name-text">
                        Characters
                        <div>
                            {comic?.characters?.items && comic.characters.items.map((char) => (
                            <Link to={"/characters/" + char.resourceURI?.split("/")[6]} key={char.resourceURI?.split("/")[6]} className="link-to-object">
                                <p>{char.name}</p>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default observer(ComicPage);