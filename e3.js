const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

function addGreeting()
  {
      arr.forEach(element => {
          element.greeting = `Hi ${element.firstName}, what do you like the most about ${element.language}?`;
      })
  }

addGreeting(list1);
console.log(list1);