// readonly properties

class Person5 {
  public readonly name: string = 'mark'
  private readonly country: string = 'korea'

  public constructor(private _name: string, private age: number) {
    this.country = 'korea1' // 변수 선언 시와, 생성자 함수에서만 값을 할당할수 잇다, 단 (내부에서 변경 가능은 생성자에서 만 가능하다)
  };
  hello() {
    // this.country = 'american'; // readonly이기 때문에 값을 바꿀수가 없다(내부)
  }

}

const p51: Person5 = new Person5('junho', 29)
console.log(p51.name)
// p51.name = 'mark'// readonly라서 값을 바꿀수가 없다(외부)
console.log(p51)
console.log(p51.name) 
