// quickstart - class

// 클래스 생성
class Person11 {

}

class Person12 {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

// 클래스를 통한 object생성
// p1이라는 변수에 Person을 통해 생성된 object생성
const p11: Person11 = new Person11()
// 생성자를 통한 객체를 생성하면서 그 property값을 초기화 하는 방법이다.
const p12 = new Person12("junho")

console.log(p11)
console.log(p12)