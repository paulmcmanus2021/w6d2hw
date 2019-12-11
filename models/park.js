const Park = function(name, ticketPrice, collectionOfDinos){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinos = collectionOfDinos;
}

Park.prototype.addDino = function(dino) {
  this.collectionOfDinos.push(dino);
}

Park.prototype.removeDino = function(dino) {
  index = this.collectionOfDinos.indexOf(dino);
  this.collectionOfDinos.splice(index);
}

Park.prototype.mostVisitedDinosaur = function (){
  let mostVisited = this.collectionOfDinos[0];
  for (dinosaur of this.collectionOfDinos){
    if (dinosaur.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay){
      mostVisited = dinosaur;
    }
  }
  return mostVisited;
}

Park.prototype.numberBySpecies = function(species){
  let total = 0;
    for (var dino of this.collectionOfDinos) {
      if (dino.species === species){
        total += 1}
      }
    return total;
}
Park.prototype.calculateVisitorsDaily = function() {
  let total = 0;
    for (var dino of this.collectionOfDinos) {
      total += dino.guestsAttractedPerDay
    }
  return total;
};






module.exports = Park
