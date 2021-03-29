
let myChain =[];
const chainMaker = {
  getLength() {
  
    return myChain.length
  },
  addLink(value) {
    
 
    myChain.push(`~( ${value} )~`)
    return chainMaker
  },
  removeLink(position) { 
    let rightPosition = position - 1

    if(rightPosition < 0) {
      myChain = [];
      throw new Error('Error')
    }
    myChain.splice(rightPosition, 1)
    return chainMaker
    
  },
  reverseChain() {
    
    myChain.reverse();

    return chainMaker
  },
  finishChain() {
  let newString = myChain.join('');
  myChain = [];
  return newString.substring(1, newString.length - 1);
  }

};

module.exports = chainMaker;
