import { proxy, subscribe } from 'valtio'

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

const store: IStore = proxy<IStore>({ likes: 0, cars: [{ make: 'Toyota', model: 'Corolla', year: 2020 }] });

// function that generates a random car make, brand and year
export function generateCar() {
    const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Audi'];
    const models = ['Corolla', 'Civic', 'Fiesta', 'Focus', 'Escape', 'X5', 'X6'];
    const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
    const make = makes[Math.floor(Math.random() * makes.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const year = years[Math.floor(Math.random() * years.length)];
    console.log(`${make} ${model} ${year}`);
    store.cars.push({ make, model, year });
}

subscribe(store, () => {
    console.log('store changed');
}
);

export default store;