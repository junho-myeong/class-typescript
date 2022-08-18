// accesiabilty

class Person31 {
  public name: string = 'junho';
  private age: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20; // age를 매개 변수로 안받은 경우를 말한다.
    } else {
      this.age = age // age를 매개 변수로 받았을 경우를 말한다.
    }
  }
}

const p31 = new Person31(29)
console.log(p31)


