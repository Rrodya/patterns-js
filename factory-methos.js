class Bwm {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed
  }
}

class BwmFactory {
  create(type) {
    if(type === "X5") {
      return new Bmw(type, 1000, 300);
    }
    
    if(type === "X6") {
       return new Bmw(type, 5000, 200);
    }
  }
}

const factory = new BwmFactory();

const x5 = factory.create("X5");
const x6 = factory.create("X6");
