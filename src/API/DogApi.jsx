const urlRandom = 'https://dog.ceo/api/breeds/image/random/5';

export const getRandomBreadsImage = (callback) => {
    fetch(urlRandom, {'method': 'GET'})
        .then( res => {
            return res.json();
        })
        .then( dogData => {
            callback(dogData)
        })
        .catch(e => console.error(e));
}

const urlBreeds = "https://dog.ceo/api/breeds/list/all"

export const getBreedsCategory = (callback) => {
    fetch(urlBreeds, {'method': 'GET'})
        .then( res => {
            return res.json();
        })
        .then( dogData => {
            callback(dogData)
        })
        .catch(e => console.error(e));
}

let urlDogsBreed;

export const getDogByBreed = (breed, callback) => {
    urlDogsBreed = `https://dog.ceo/api/breed/${breed}/images/random/5`;
    fetch(urlDogsBreed, {'method': 'GET'})
        .then( res => {
            return res.json();
        })
        .then( dogData => {            
            callback(dogData)
        })
        .catch(e => console.error(e));
}