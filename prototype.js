// clint -> protoryp(clone()) -> Clones

const TeslaCar = {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }
  
  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new TeslaCar("S", 89000 "black", false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = "white";
car.autopilot = true;

// prototype это паттерн с помощью которого мы можем создать копию объекта везде где нам это требуется
// с минимальными затратами памяти так как копия создается на основании уже существующей структуры
