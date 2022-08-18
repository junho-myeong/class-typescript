// static properties & method

class Person81 {
  static CITY = 'Seoul'
  hello() {
    console.log('hello', Person81.CITY)
  }
  change() {
    Person81.CITY = 'LA'
  }
}

const p81 = new Person81()
p81.hello()

// 공유를 한다는게 무슨뜻인가?
const p82 = new Person81()
p82.hello()
p81.change()
p82.hello()


// hello를 그냥 method라고 생각하지 않고 static method로 생각하기 때문이다.
// p81.hello()

Person81.CITY


