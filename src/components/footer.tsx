import { Link } from 'react-router-dom';

const year = new Date().getFullYear()

export default function Footer()
{
    return (
        <footer>
            <div className='footer-box'>
                <img src = "marvel_logo.svg" className='logo-footer'/>
                <p className='footer-text'>Data provided by Marvel. © {year} MARVEL.</p>
                <Link to = "https://developer.marvel.com" className='footer-text'><p>developer.marvel.com</p></Link>
            </div>
        </footer>
    );
}