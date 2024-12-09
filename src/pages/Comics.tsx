import Search from '../components/search';
import Card from '../components/card';
import { useEffect, FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import comicsStore from '../stores/ComicsStore';
import { VirtuosoGrid } from 'react-virtuoso';
import Loading from '../components/loading';

const Comics: FC = () => {
    const [offset, setOffset] = useState(0);
    
    const { comics, comicsDataContainer, loading } = comicsStore;

    useEffect(() => {
        comicsStore.getComicsList();
      }, []);

    const loadMore = () =>
    {
        setOffset(offset + 100);
        comicsStore.params.offset = offset + 100;
        comicsStore.getComicsList();
    }

    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Comics</p>
                    <p className='page-count'>({comicsDataContainer.total})</p>
                </div>
                <Search placeholder='Search for Comics by Name' type = 'comics'/>

                {loading && comics.length === 0 ? <Loading/> : comics.length > 0 ? (
                <VirtuosoGrid style = {{height: '100vh'}}
                increaseViewportBy={200}
                data={comics}
                endReached={loadMore}
                itemContent={(_, comic) => <Card page = {comic}/>}
                components={{Footer: () => loading ? <Loading/> : null}}
                listClassName='cards'>
                
                </VirtuosoGrid>
                ) : (<div className='loadings'>No comics found</div>)}
            </section>
        </>
    );
}

export default observer(Comics);