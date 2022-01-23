

function randomInteger(min, max, amount){
    let uniqueNumbs =[];
   for (let j=0; j < amount; j++){
   
  
   let randomNumb=(Math.trunc(min+Math.random()*(max-min+1)));     
    if(!uniqueNumbs.includes(randomNumb)){
        uniqueNumbs.push(randomNumb)
        
        }
    else {
    console.log ('not unique')
        }
   
    alert(randomNumb);
    console.log (uniqueNumbs)
    
    } 
}
min =+ prompt("Input min");
max =+ prompt( "Input max");
amount = +prompt ("Input amount");
randomInteger(min,max,amount)




    
    
    


