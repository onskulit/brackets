module.exports = function check(str, bracketsConfig) {

  // configuration definition
  const openBrackets = [];
  const bracketPairs = {};
  
  for (let bracketPair of bracketsConfig) {
    openBrackets.push(bracketPair[0]);
    bracketPairs[bracketPair[1]] = bracketPair[0];
    //need equality test
  } 

  // determination of correct execution
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (stack.length >= 1 && currentSymbol === bracketPairs[currentSymbol] && stack.includes(currentSymbol)) {
      stack.pop();
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (bracketPairs[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  console.log(str);
  console.log(stack);
  return stack.length === 0;
}
