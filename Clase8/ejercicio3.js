const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ]; 

  const addProperty = list1.map(item => {
    return{
      ...item,
      userName: `${item.firstName.toLocaleLowerCase()}${item.lastName.toLocaleLowerCase().replace(".", "")}${(2021-item.age)} `
    }
  })
  console.log(addProperty); 