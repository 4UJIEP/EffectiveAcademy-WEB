import Search from '../components/search';
import Card from '../components/card';
import { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';

import postsStore from '../stores/ComicsStore';
import comicsStore from '../stores/ComicsStore';
import Pagination from '../components/pagination';

const Comics: FC = () => {


    useEffect(() => {
        comicsStore.getComicsList();
      }, []);

    const { comics, comicsDataContainer, loading } = postsStore;

    return (
        <>
            <section className='main-section'>
                <div className='characters-header'>
                    <p className='page-name'>Comics</p>
                    <p className='page-count'>({comicsDataContainer.total})</p>
                </div>
                <Search placeholder='Search for Comics by Name' type = 'comics'/>
                {loading ? <div className='loadings'>Loading...</div> : comics.length > 0 ? (
                <>
                    <section className='cards'>
                    {comics.map((comic) => (
                        <Card page = {comic}/>
                    ))}
                    </section>
                    <Pagination total = {comicsDataContainer.total} limit = {comicsDataContainer.limit} offset = {comicsDataContainer.offset} type = "comics"/>
                </>
                ) : (<div className='loadings'>No comics found</div>)}
            </section>
        </>
    );
}

export default observer(Comics);