import { useParams } from "react-router-dom";
import { ComicByID } from "../types/data";

export default function ComicPage(){

    const params = useParams();
    const comic = ComicByID(`${params.comicId}`);
    return (
        <>
            <section className='content-page'>
                <img src = {!comic.image ? '../public/char_images/no_image.jpg' : comic.image}/>
                <div className="content-info">
                    <div className='content-name'>
                        <p className="name-text">{comic.title}</p>
                        <p>{comic.body}</p>
                    </div>
                    <div className="content-list name-text">
                        Characters
                        <div className="def-text">
                            {comic.links.map((link: string) => (
                                <p>
                                    {link}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}