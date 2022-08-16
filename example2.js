"use strict";
// 접근 제어자
class Person2 {
    // protected는 외부에서 접근이 불가능 하고 상속 관계에 잇을때 접근 할수 잇다는 뜻이다.
    constructor(age) {
        this.name = 'junho'; // public 은 어디에서든 접근 가능하다
        if (age === undefined) {
            this.age = 29;
        }
        else {
            this.age = age;
        }
    }
    ;
}
const p3 = new Person2(29); // default생성자에 의해서 인자가 없이, 값을 초기화 하는것이다.
console.log(p3);
