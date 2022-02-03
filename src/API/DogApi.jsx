const url = 'https://dog.ceo/api/breeds/image/random/10';

export const getRandomBreadsImage = (callback) => {
    fetch(url, {'method': 'GET'})
        .then( res => {
            return res.json();
        })
        .then( dogData => {
            callback(dogData)
        })
        .catch(e => console.error(e));
}
