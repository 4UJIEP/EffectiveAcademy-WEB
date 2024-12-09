import { makeAutoObservable, runInAction } from 'mobx';
import api from '../api'
import { Character, CharacterDataContainer, CharacterSearchParams } from '../types/data';
import { Bounce, toast } from 'react-toastify';

class CharactersStore
{
    characters: Character[] = [];

    charactersDataContainer: CharacterDataContainer = { offset: 0, limit: 0, total: 0, count: 0, results: [] }

    loading: boolean = false;

    params: CharacterSearchParams = {limit: 100};

    constructor() { makeAutoObservable(this); }

    getCharactersList = async (): Promise<void> => {
        try {

            this.loading = true;

            const charactersDataWrapper = await api.posts.getCharacters(this.params);

            const characters = charactersDataWrapper.data.results;
            const characterDataContainer = charactersDataWrapper.data;

            runInAction(() => {
                this.characters = [...this.characters, ...characters];
                this.charactersDataContainer = characterDataContainer;
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

const charsStore = new CharactersStore();

export default charsStore;