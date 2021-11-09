const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  function lan(array,lenguage)
  {
    let check = false;

    check = array.find(element => element.language != lenguage);

    var out = !check ? true : false;

    return out;

  }

  console.log(lan(list, "Python"));