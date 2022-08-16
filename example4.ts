// getter & setter
// getter 와 setter를 사용하는 이유는 private로 사용할때, 외부에서 값에 접근 불가하기 떄문에 
// 이걸 해결하기 위해서 이다.
// getter와 setter는 보통 한세트로 같이 작성해줘야 설정과 접근을 둘다 할수 잇다.
class Person4 {
  public constructor(private _name: string, private age: number) { };

  get name() {
    // console.log('getter')
    return this._name + " Myeong";
  }

  set name(n: string) {
    console.log('setter')
    this._name = n;
  }
}

const p41: Person4 = new Person4('junho', 29)
// 파라미터로 구별 되지 않기 때문에, getter에 접근하는것인지, setter에 접근하는것인지는 
// 코드를 통해서 구별해야한다. console함수 같은경우는 get 함수를 호출
// 객체에 프로퍼티에 바로 접근하는것은 set 함수에 접근하는것이다.
console.log(p41.name) // get 을 하는 함수를 getter, getter를 사용하면 return 전에 어떠한 함수를 실행할수 잇다.
p41.name = 'mark' // set을 하는 함수를 setter
console.log(p41)
console.log(p41.name) // get 을 하는 함수를 getter, getter를 사용하면 return 전에 어떠한 함수를 실행할수 잇다.
