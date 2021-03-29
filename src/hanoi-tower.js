module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let turnsNeed = Math.pow(2, disksNumber) - 1; 
    let SecNeed = Math.floor(turnsNeed/(turnsSpeed/3600))
    let result = {
      turns : turnsNeed,
      seconds : SecNeed
    };
    return result
};
