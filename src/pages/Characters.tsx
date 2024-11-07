import Search from '../components/search';
import Card from '../components/card';
import { CHAR_DATA } from '../types/data';

export default function Characters(){
    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Characters</p>
                    <p className='page-count'>({CHAR_DATA.length})</p>
                </div>
                <Search/>
                <section className='cards'>
                    {CHAR_DATA.map((char) => (
                        <Card page = {char}/>
                    ))}
                </section>
            </section>
        </>
    );
}