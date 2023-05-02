function bwpProducer(kind) {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
}

//factories

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a sport car!";
  }
}

class I3 {
  info() {
    return "I3 is a family car!";
  }
}

//init abstract factory for sport cars

const produce = bmwProducer("sport");

// car producing (Factory);
const myCar = new producer();

console.log(myCar.info()); // "Z4 is a sport car"
