// reade only properties

class Person61 {
  public readonly name: string = 'mark'
  private readonly county: string = 'korean'
  public constructor(private _name: string, private age: number) {
    // readonly 키워드가 잇는 경우
    // 초기화 하는 부분과 생성자 함수 내부에서만 같을 지정할수 잇다.
    this.county = 'american'
  }

  // hello() {
  //   this.county = 'american'
  // }
}

const p61 = new Person61('junho', 29)
console.log(p61)
console.log(p61.name)
// p61.name = 'mark' 
console.log(p61.name)


