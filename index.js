let reduce = function(list, callback, initial){
    let memo = initial;
    let length = list.length;
    for(let i = 0; i < length; i++){
      if(i === 0 && memo === undefined){
        memo = list[0];
      } else{
        memo = callback(list[i], memo);
      }
    }
    return memo
  }
  

  //Demonstration
  reduce([1,2,3,4], (v,sum)=> v + sum, 0 ); // logs 10