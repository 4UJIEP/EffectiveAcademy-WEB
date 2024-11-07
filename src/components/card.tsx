import { Link } from 'react-router-dom';

export default function Card(props: any)
{
    const char = props.page;
    var sliced = char.body.slice(0,50);
    if (sliced.length < char.body.length) 
        {
        sliced += '...';
    }
    
    return (
        <Link className='card' to={`${char.id}`}>
            <img src={!char.image ? '../public/char_images/no_image.jpg' : char.image}/>
            <p className="card-name">{char.title}</p>
            <p className="card-desc">{sliced}</p>
        </Link>
    );
}