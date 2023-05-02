// Director (contrustor()) --> AbstractBuilder <-- Builder(step1(), step2(), build()) --> Products

class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  contrustor () {
    this.car = new Car();
  }
  
  addAutopPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }
  
  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this.
  }
  
  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this
  }
  
  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  
  build() {
    return this.car;
  }
}

const myCar = new CarBuilder().addAutoPilot(true).addPatktronic(true).updateEngine("V8").build();

console.log(myCar);

/*
Object {
  autoPilot: true,
  engine; "V8",
  parktronic: true,
  signaling: false
}
*/
