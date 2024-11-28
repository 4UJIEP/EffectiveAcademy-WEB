import { CharacterDataWrapper, CharactersSearchParams, ComicDataWrapper, ComicSearchParams } from '../types/data';
import instance from '../api/axios';

export default
{
    async getCharacters(params: CharactersSearchParams): Promise<CharacterDataWrapper> 
    {
        const response = await instance.get(`/v1/public/characters`, {params});
        return response.data;
    },
    async getCharacter(postId: number)
    {
        const response = await instance.get(`/v1/public/characters/${postId}`);      
        return response.data;
    },
    async getComics(params: ComicSearchParams): Promise<ComicDataWrapper>
    {
        const response = await instance.get(`/v1/public/comics`, {params});
        return response.data;
    },
    async getComic(postId: number)
    {
        const response = await instance.get(`/v1/public/comics/${postId}`);
        return response.data;
    }
}

