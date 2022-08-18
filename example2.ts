// construct & initializer

class Person21 {
  name: string = 'junho';
  // !를 붙이게 되면 지금 당장 초기화 시키지 않고 나중에 값을 할당 하겠다 라는 뜻이 된다.
  age: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20; // age를 매개 변수로 안받은 경우를 말한다.
    } else {
      this.age = age // age를 매개 변수로 받았을 경우를 말한다.
    }
  }

  // overloading은 불가능 하다, 자바에서는 생성자 함수의 이름이 같아도 매개 변수가 다르면 이용 가능하다
  // constructor(age: number) {
  //   this.age = age;
  // }
}

// class 내부에 생성자를 작성하지 않으면 default생성자가 잇다.
// 인자 없이 기본적으로 만들어 주는 생성자 이다.
const p21 = new Person21(29)
const p22 = new Person21()
console.log(p21)
p21.age = 39;
// 런타임 상에서(즉 실행 환경에서는 undefined가 아니고 잘 돌아 간다)
// 다만 문제는 컴파일 시에는 class 내부에서 age라는 값이 초기화 되지 않았기 때문에 
// 문제라고 인식 한다.
// 이걸 해결하기 위해서는 !를 붙여준다.
console.log(p21.age);