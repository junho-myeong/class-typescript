"use strict";
// initialization in constructor parameters(example4.ts)
class Person41 {
    // this.name, this.age대신해서 생성자를 통해서 바로 프로퍼티 값을 초기화 하는것이다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p41 = new Person41('junh', 29);
console.log(p41);
console.log(p41.name);
// private로 선언했기 때문에 접근이 불가능 하다.
// console.log(p41.age)
