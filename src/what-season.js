

module.exports = function getSeason(date) {

  

  if(!date){
    return 'Unable to determine the time of year!'
  }

  if (!date.getTime()) {
    return 'Error'
  }

 let month = date.getMonth()

 if(1 < month &&  month < 5){
   return 'spring'
 }
 if(4 < month &&  month < 8){
  return 'summer'
}
if(7 < month &&  month < 11){
  return 'fall'
}else{
  return 'winter'
}
};
