import Search from '../components/search';
import Card from '../components/card';
import { useEffect, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid } from 'react-virtuoso';

import charactersStore from '../stores/CharactersStore';
import Loading from '../components/loading';

const Characters: FC = () => {
    const [offset, setOffset] = useState(0);
    
    const { characters, loading, charactersDataContainer } = charactersStore;

    useEffect(() => {
        charactersStore.getCharactersList();
    }, []);
    

    const loadMore = () =>
    {
        setOffset(offset + 100);
        charactersStore.params.offset = offset + 100;
        charactersStore.getCharactersList();
    }

    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Characters</p>
                    <p className='page-count'>({charactersDataContainer.total})</p>
                </div>
                <Search placeholder='Search for Characters by Name' type = 'characters'/>
                
                {loading && characters.length === 0 ? <Loading/> : characters.length > 0 ? (
                <VirtuosoGrid style = {{height: '100vh'}}
                increaseViewportBy={200}
                data={characters}
                endReached={loadMore}
                itemContent={(_, char) => <Card page = {char}/>}
                components={{Footer: () => loading ? <Loading/> : null}}
                listClassName='cards'>
                
                </VirtuosoGrid>
                ) : (<div className='loadings'>No characters found</div>)}
            </section>
        </>
    );
}

export default observer(Characters);

{/* <section className='cards'>
{characters.map((char) => (
    <Card page = {char}/>
))}
</section> */}