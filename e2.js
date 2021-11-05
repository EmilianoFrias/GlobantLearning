var n = 0;
const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
]

for( i = 0; i<list.length;i++){
    if(list[i].continent == 'Europe')
    n++;
}

console.log("La cantidad de personas que asistieron de europa son: "+ n); 

//hola toy modificando 