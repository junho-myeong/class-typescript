"use strict";
// getter and setter
class Person51 {
    // 여기서 name과 age는 실제 프로퍼티 이다.
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        // getter를 사용하면 실제로 데이터를 get하기 직전에 다른 기능을 추가할수 잇다.
        console.log('getter');
        return this._name + ' Myeong';
    }
    set name(n) {
        console.log('setter');
        this._name = n;
    }
}
const p51 = new Person51('junho', 29);
console.log(p51);
console.log(p51.name); // get을 하는 함수를 getter 라고 부른다, 함수를 뽑아 오는것처럼 사용하는게 아니고 프로퍼티 뽑는것처럼 사용
p51.name = 'mark'; // set을 하는 함수를 setter라고 부른다.
console.log(p51.name);
