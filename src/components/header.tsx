import { NavLink } from 'react-router-dom';

export default function Header()
{
    return (
        <header className='header'>
            <img src='marvel_logo.svg' className='logo-header'/>
            <nav className='navigation'>
                <NavLink to="/characters" className={({isActive}) => { return isActive ? 'navigation-button-active' : 'navigation-button' }}>Characters</NavLink>
                <NavLink to="/comics" className={({isActive}) => { return isActive ? 'navigation-button-active' : 'navigation-button' }}>Comics</NavLink>
            </nav>
        </header>
    );
}