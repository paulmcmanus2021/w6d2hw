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

module.exports = Park
