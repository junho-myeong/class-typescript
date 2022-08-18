"use strict";
// abstract class
// 완전하지 않은 클래스를 표현할수 잇다.
class AbstractPerson {
    constructor() {
        this._name = 'mark';
    }
}
class Person extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p1101 = new Person();
p1101.setName('junho');
