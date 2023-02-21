const users = [
    'Ryan',
    'Tyson',
    'Sarah',
    'Lindsay',
    'Eddy',
    'Harry',
    'Becky',
    'Tom',
    'Georgia',
    'Will',
    'Patty',
];

const appDescriptions = [

]

const getRandomArrItem = (arr)=> arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => 
`${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

const getRandomThoughts = (int) => {
    const results = [];
    for(let i = 0; i< int; i++) {
        results.push({
         thoughtName: getRandomArrItem(appDescriptions),
         score: Math.floor(Math.random()* (99 - 70 + 1)),
        });
    }
    return results;
}

module.exports = {getRandomName, getRandomThoughts};