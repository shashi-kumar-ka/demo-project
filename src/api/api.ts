import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mocki.io/v1',
});

export interface Hotel {
    id: string;
    name: string;
    freeBreakfast: boolean;
    favorite: boolean;
    description: string;
    image: string;
    price: number;
    location: string;
}

export const getHotels = async (): Promise<Hotel[]> => {
    const response = await api.get('4775a500-cf31-4bee-8a65-0c849b6e4d0c');

    return response.data;
};
