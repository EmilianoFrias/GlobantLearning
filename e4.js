const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
 ];
 
 
 function leng(arr, language){
    
    var out = false;
 
    list.forEach(element => {
       if(element.language == language)
       {
           out =  true;
       } 
   })
 
   return out;
 }
 
 console.log(leng(list, 'Ruby'));
 console.log(leng(list, 'Python'));
 