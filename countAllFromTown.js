module.exports = function countAllFromTown(count, town){
  var towns = count.split(",")
  var isEqual = [];
  for(var i = 0; i < towns.length; i++){
    var from = towns[i].trim();
    if(from.startsWith(town)){
      isEqual.push(from);
    }
  }
  return isEqual.length;
  
};