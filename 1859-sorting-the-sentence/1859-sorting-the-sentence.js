/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    
    let letters = s.split(" "); 
   
    let resultarr = []
    
    for(let i=0; i < letters.length; i++) {
        
       let letter =  letters[i]; 
        const ind =  letter.split("").pop(); 
        resultarr[ind - 1] = letter.slice(0 ,- 1)
        
        
        
    }
    
      return resultarr.join(" ");
     
    
    
    
};

