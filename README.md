# class-typescript

## class란?
- object를 만드는 blueprint(청사진, 설계도)
- 클래스 이전에 obejct를 만드는 기본적이 방법은 function
- Javascript에도 class는 ES6부터 사용가능
- OOP를 위한 초석
- TS에서는 클래스도 사용자가 만드는 타입의 하나이다.

## quick strat - class
- class 키워드를 이용하여 클래스를 만들수 있다.
- class 이름은 보통 대문자를 이용한다.
- new를 이용하여 class를 통해 object를 만들수 있다.
- constructor를 이용하여 object를 생성 하면서 값을 전달할수 잇다.
- this를 이용해서 만들어진 object를 가리킬수 잇다.
- JS로 컴파일 되면 ES5의 경우 function으로 변경된다.

## constructor & initializer
- 생성자 함수가 없다면, default 생성자가 불리고,
- 프로그래머가 만든 생성자가 하나라도 있다면, 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우 !를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 안으면 undefined이다.
- 생성자는 async를 설정할수 없다.

## 접근제어자(java에 빗대어 본다면 public, private)
- 접근제어자에는 public, private, protected가 있다.
- 설정하지 않으면 public이다.
- 클래스 내부의 모든곳에(생성자, 프로퍼티, 메서드)에서 설정 가능하다.
- private로 설정하면 클래스 외부에서 접근할수 없다.
- 자바스크립트에서 private지원하지 않아 오랫동안 프로퍼티나 메서드 이름앞에 _를 붙여서 표현했다.

## initialization in constructor parameters
- 객체를 초기화 할때는 생성자 함수에서(this)를 이용하거나, 변수 초기화를 통해서 default생성자를 이용하기도 하지만,
- 생성자 함수에서 this 대신, 생성자 함수의 파라미터의 접근 제어자를 통해서(this 대신에) 객체에 초기화 값을 할당 할 수도 잇다.
``` ts
// initialization in constructor parameters
class Person3 {
  // 파라미터에서 접근 제어자를 통해 바로 초기화 할당이 가능하다.
  // private로 사용하면 내부 생성자 함수에 의해서 할당은 되지만, 외부에서 그 속성에 접근해서 값을 바꿀순 없다.
  public constructor(public name: string, private age: number) { };
}

const p31: Person3 = new Person3('junho', 29)
console.log(p31)
```

## getter & setter(example4.ts)
- getter & setter
-  getter 와 setter를 사용하는 이유는 private로 사용할때, 외부에서 값에 접근 불가하기 떄문에 
- 이걸 해결하기 위해서 이다.
- getter와 setter는 보통 한세트로 같이 작성해줘야 설정과 접근을 둘다 할수 잇다.

# readonly properties(example5.ts)
