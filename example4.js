"use strict";
// initialization in constructor parameters
class Person4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    ;
    get name() {
        console.log('getter');
        return this._name;
    }
    set name(n) {
        console.log('setter');
        this._name = n;
    }
}
const p41 = new Person4('junho', 29);
console.log(p41.name); // get 을 하는 함수를 getter, getter를 사용하면 return 전에 어떠한 함수를 실행할수 잇다.
p41.name = 'mark'; // set을 하는 함수를 setter
console.log(p41);
