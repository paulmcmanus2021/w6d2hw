const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let diplodocus = new Dinosaur("Diplodocus", "Herbivore", 10);
  let allosaurus = new Dinosaur("Allosaurus", "Carnivore", 15);

    beforeEach(function () {
      park = new Park("Dinosaur Island", 10,[
        tRex = new Dinosaur("T-rex", "Carnivore", 50),
        velociraptor = new Dinosaur("Velociraptor", "Carnivore", 40),
        brontosaurus = new Dinosaur("Brontosaurus", "Herbivore", 20)
      ])
    })

    it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, "Dinosaur Island");
    })

    it('should have a ticket price', function () {
      const actual = park.ticketPrice;
      assert.strictEqual(actual,10)
    });

    it('should have a collection of dinosaurs', function() {
      const actual = park.collectionOfDinos;
      assert.deepStrictEqual(actual, [tRex, velociraptor,brontosaurus])
    });

    it('should be able to add a dinosaur to its collection', function() {
      park.addDino(diplodocus)
      const actual = park.collectionOfDinos
      assert.deepStrictEqual(actual,[tRex, velociraptor,brontosaurus, diplodocus])
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.removeDino(brontosaurus);
      const actual = park.collectionOfDinos
      assert.deepStrictEqual(actual, [tRex, velociraptor])
    });

    it('should be able to find the dinosaur that attracts the most visitors', function(){
      
    });

    it('should be able to find all dinosaurs of a particular species');

    it('should be able to calculate the total number of visitors per day');

    it('should be able to calculate the total number of visitors per year');

    it('should be able to calculate total revenue for one year');

  });
