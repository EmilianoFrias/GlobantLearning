const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];

  function people(array,language)
  {
    var out = array.find(item => item.language == language );
      
    if(out) console.log(`${out.firstName}, from ${out.country }  was the first ${out.language} developer in the conference`);

   else console.log(`There are no ${language} developers in the conference`);
   
   //return out;
  }


  console.log(people (list1,'Python'));
  console.log(people(list1,'JavaScript'));
  console.log(people(list1,'C#'));