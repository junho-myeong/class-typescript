// class

// quick strat - class
// class Person { // 클래스 이름은 보통 대문자로 사용한다.
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1: Person = new Person('junho', 29)
// console.log(p1)



// construcotr & initializer
class Person { // 클래스 이름은 보통 대문자로 사용한다.
  name: string = 'junho'; // 생성자 함수를 통한 초기화 방법이 아닌 바로 초기화 하는 방법이다.
  // 클래스 내부에서 값이 number로 바로 할당 되지 않아도 된다, 즉 밖에서 런타임 시에 할당을 해도 된다는 뜻이다.
  // 클래스를 호출할때 값을 바로 할당 하지 않아도 된다는 뜻이다.
  age!: number;
  constructor(age?: number) { // 생성자를 구현하게 되면 default생성자는 사라지게 된다.
    if (age === undefined) {
      this.age = 29
    } else {
      this.age = age
    }
  };

  // 자바 스크립트에서는 생성자를 여러개를 만들 수는 없다.
  // constructor(age: number) { // 생성자를 구현하게 되면 default생성자는 사라지게 된다.
  //   this.age = age
  // }

  // constructor안에는 async를 붙일수 없다. 비동기 처리를 할수 없다는 뜻이다.
}

const p1: Person = new Person(29) // default생성자에 의해서 인자가 없이, 값을 초기화 하는것이다.
const p2: Person = new Person()
console.log(p1)
p1.age = 39;
console.log(p1.age)
console.log(p2)






