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