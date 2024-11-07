import { useParams } from "react-router-dom";
import { CharByID } from "../types/data";

export default function CharacterPage(){
    const params = useParams();
    const char = CharByID(`${params.characterId}`);
    return (
        <>
            <section className='content-page'>
                <img src = {!char.image ? '../public/char_images/no_image.jpg' : char.image}/>
                <div className="content-info">
                    <div className='content-name'>
                        <p className="name-text">{char.title}</p>
                        <p>{char.body}</p>
                    </div>
                    <div className="content-list name-text">
                        Comics
                        <div className="def-text">
                            {char.links.map((link: string) => (
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