import { proxy } from 'valtio'

interface ICar {
    make: string;
    model: string;
    year: number;
}

interface IStore {
    likes: number;
    cars: ICar[];
    //getAverageTemperature: () => number;
}

const store: IStore = proxy<IStore>({ likes: 0, cars: [{ make: 'Toyota', model: 'Corolla', year: 2020 }] })

export default store;