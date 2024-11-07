import Card from '../components/card';
import Search from '../components/search';
import { COMIC_DATA } from '../types/data';

export default function Comics(){
    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Comics</p>
                    <p className='page-count'>({COMIC_DATA.length})</p>
                </div>
                <Search/>
                <section className='cards'>
                    {COMIC_DATA.map((char) => (
                        <Card page = {char}/>
                    ))}
                </section>
            </section>
        </>
    );
}