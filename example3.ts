// initialization in constructor parameters
class Person3 {
  // 파라미터에서 접근 제어자를 통해 바로 초기화 할당이 가능하다.
  // private로 사용하면 내부 생성자 함수에 의해서 할당은 되지만, 외부에서 그 속성에 접근해서 값을 바꿀순 없다.
  public constructor(public name: string, private age: number) { };
}

const p31: Person3 = new Person3('junho', 29)
console.log(p31)
// console.log(p31.age) // 불가
