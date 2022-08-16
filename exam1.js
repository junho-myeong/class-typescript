"use strict";
// class
// quick strat - class
// class Person { // 클래스 이름은 보통 대문자로 사용한다.
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p1: Person = new Person('junho', 29)
// console.log(p1)
// construcotr & initializer
class Person {
    constructor(age) {
        this.name = 'junho'; // 생성자 함수를 통한 초기화 방법이 아닌 바로 초기화 하는 방법이다.
        if (age === undefined) {
            this.age = 29;
        }
        else {
            this.age = age;
        }
    }
    ;
}
const p1 = new Person(29); // default생성자에 의해서 인자가 없이, 값을 초기화 하는것이다.
const p2 = new Person();
console.log(p1);
p1.age = 39;
console.log(p1.age);
console.log(p2);
