"use strict";
// singleton pattern
// object를 단한번 생성할때 사용한다.
class ClassName {
    constructor() {
    }
    static getInstance() {
        // ClassName으로 부터 만든 객체가 있으면 그것을 리턴한다,
        // 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
// const a = new ClassName()
// const b = new ClassName()
const p91 = ClassName.getInstance();
const p92 = ClassName.getInstance();
console.log(p91 === p92);
