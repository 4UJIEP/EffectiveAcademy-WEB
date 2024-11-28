import { Link } from 'react-router-dom';

export default function Card(props: any)
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
    return (
        <Link className='card' to={`${page.id}`}>
            <img src = {(page.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") ? 'no_image.jpg' : page.thumbnail.path + "." + page.thumbnail.extension}/>
            <p className="card-name">{page.name ? page.name : page.title}</p>
            <p className="card-desc">{sliced}</p>
        </Link>
    );
}