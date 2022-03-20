/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  
     let counterR = 0; 
    let counterL = 0; 
    let resultCounter = 0; 
    
    for (let i = 0; i < s.length; i ++) {
        
        if(s[i]== "R") {
            counterR++
        }else {
            counterL++
        }
        
        if(counterR == counterL) {
            resultCounter ++
        }
        
    }
    
    return resultCounter;
    
    
};