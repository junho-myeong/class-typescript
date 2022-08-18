"use strict";
// index signatures in class(example7.ts)
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'femal', alex: 'male', anna: 'female'}
class Students {
    constructor() {
        // mark = "hello"
        this.mark1 = "male"; // male라는 타입을 가지고 그 값이 male이라는 뜻이다.
    }
}
const aClass = new Students();
aClass.mark = 'male';
aClass.jade = 'male';
console.log(aClass);
const bClass = new Students();
bClass.chloe = 'female';
bClass.alex = 'male';
bClass.anna = 'female';
console.log(bClass);
