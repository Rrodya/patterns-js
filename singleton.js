const instance = {
  name: "singleton"
}

const instance2 = {
  name: "singleton"
}

instance === instance2

//создание объекта с помощью литерала - синглтон


let instance;

// при попытке создать сущ интсанс будет получать ссылку на него

class Counter {
  constructor() {
    if(!instance) instance = this;
    return instance;
  }
  
  getCount() {
    return instance.count;
  }
  
  increaseCountr() {
    return instance.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); //4
console.log(myCount2.getCount()); //4

//не смотря на то что у нас два объекта созданных в разное, они ссылаюсь на один объект синглтон и изменяют его 4 раза
// проблема в том что создали глобальную переменную instance - плохой тон


//решение для того что бы случано не изменить раньше использовалась самовызывающая анонимная функция

class Counter {
  counstuctor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    
    this.count = 0;
    Counter.instance = this;
    return this;
  }
  
  getCount() {
    return this.count;
  }
  
  increaseCounter() {
    return this.count++;
  }
};

//  у класса есть только один экземпляр
	 

