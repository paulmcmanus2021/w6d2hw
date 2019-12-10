const Park = function(name, ticketPrice, collectionOfDinos){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinos = collectionOfDinos;
}

Park.prototype.addDino = function(dino) {
  this.collectionOfDinos.push(dino);
}

module.exports = Park
