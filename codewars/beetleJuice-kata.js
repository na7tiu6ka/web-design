// my solution
function beetleJuice(name){
  var result = "";
  for(var i = 0; i < 3; i++) {
    result = result + name;
    if(i != 2) {
      result = result + "  ";
    }
  }
  
  return result;
}


// Slavas solution
function beetleJuice(name) {
  return (name + "  ").repeat(3).trim();
}


//Rammstein help kata
function feuerFrei(concentration, barrels) {
  var numberOfHours = barrels * concentration;
  if(numberOfHours < 100) {
    return 100 - numberOfHours + " Stunden mehr Benzin benötigt.";
  } else if(numberOfHours === 100) {
    return "Perfekt!";
  } 
  return numberOfHours - 100;
}

//word count kata
function countWords(str) {
var matches = str.match(/\S+/g);
    return matches ? matches.length : 0;
}