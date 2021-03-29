
module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)){
    return false;
  }

  let clearMembers =[]
 
  members.forEach(element => {
    if(typeof element === "string"){
      clearMembers.push(element)
    }
  });

  let team = [];

  for (let i = 0; i < clearMembers.length; i++) {
    if (typeof clearMembers[i] === "string") {
      team.push(clearMembers[i].trim().toUpperCase().substr(0, 1));
    } else {
      return false; 
    }
  }

  return team.sort().join("")

};
