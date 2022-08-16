// 접근 제어자
class Person2 { // 클래스 이름은 보통 대문자로 사용한다.
  public name: string = 'junho'; // public 은 어디에서든 접근 가능하다
  private age!: number;// private는 클래스 내부에서만 접근할수 잇다는 뜻이다.
  // protected는 외부에서 접근이 불가능 하고 상속 관계에 잇을때 접근 할수 잇다는 뜻이다.
  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 29
    } else {
      this.age = age
    }
  };
}

const p3: Person2 = new Person2(29) // default생성자에 의해서 인자가 없이, 값을 초기화 하는것이다.
console.log(p3)






