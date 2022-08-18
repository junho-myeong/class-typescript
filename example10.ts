// inherit
// 다른 클래스를 가지고 자신만의 기능을 추가하는것이다.

class Parent {
  constructor(protected _name: string, private _age: number) {
  }
  print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
  protected printName(): void {
    console.log(this._name)
  }
}

// const p101 = new Parent('junho', 29)
// p101.print()

class Child extends Parent {
  // override
  // 접근 제어자 또한 오버 라이드 된다.
  // public _name = 'mark'

  // 새로운 프로퍼티 추가
  // gender: string = "male"

  // constructor(age: number) {
  //   // 자식에 생성자 에서는 무조건 super를 먼저 호출해줘야한다.
  //   super('mark', age);
  //   this.printName();
  // }
  constructor(private readonly gender: string) {
    super('mark', 5);

  }
}
// child에서 생성자가 없다면 parent에 생성자를 그대로 가져 와서 사용한다.
// const p102 = new Child('son', 5)

// 자신만의 생성자를 통해서 부모의 생성자도 가져와서 사용할수잇다.
const p102 = new Child("male")

p102.print()
console.log(p102)
// p102.gender
// console.log(p102._name)