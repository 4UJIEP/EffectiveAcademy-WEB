import Search from '../components/search';
import Card from '../components/card';
import { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';

import charactersStore from '../stores/CharactersStore';
import Pagination from '../components/pagination';

const Characters: FC = () => {

    useEffect(() => {
        charactersStore.getCharactersList();
      }, []);

    const { characters, loading, charactersDataContainer } = charactersStore;

    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Characters</p>
                    <p className='page-count'>({charactersDataContainer.total})</p>
                </div>
                <Search placeholder='Search for Characters by Name' type = 'characters'/>
                {loading ? <div className='loadings'>Loading...</div> : characters.length > 0 ? (
                <>
                    <section className='cards'>
                    {characters.map((char) => (
                        <Card page = {char}/>
                    ))}
                    </section>
                    <Pagination total = {charactersDataContainer.total} limit = {charactersDataContainer.limit} offset = {charactersDataContainer.offset} type = "characters"/>
                </>
                ) : (<div className='loadings'>No characters found</div>)}
            </section>
        </>
    );
}

export default observer(Characters);

