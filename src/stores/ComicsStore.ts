import { runInAction, makeAutoObservable} from 'mobx';
import api from '../api'
import { Comic, ComicDataContainer, ComicSearchParams } from '../types/data';
import { Bounce, toast } from 'react-toastify';

class ComicsStore
{
    comics: Comic[] = [];

    comicsDataContainer: ComicDataContainer = { offset: 0, limit: 0, total: 0, count: 0, results: [] }

    loading: boolean = false;

    params: ComicSearchParams = {limit: 60};

    constructor() { makeAutoObservable(this); }

    getComicsList = async (): Promise<void> => {
        try {
            this.loading = true;

            const comicsDataWrapper = await api.posts.getComics(this.params)

            const comics = comicsDataWrapper.data.results;
            const comicDataContainer = comicsDataWrapper.data;

            runInAction(() => {
                this.comics = comics;
                this.comicsDataContainer = comicDataContainer;
            });
        }
        catch (e) {
            toast.error(`${e}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            console.error(e);
        }
        finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

const comicsStore = new ComicsStore();

export default comicsStore;