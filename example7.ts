// index signatures in class(example7.ts)
// 프로퍼티를 동적으로 생성할때 사용하는 문법이다.

// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'femal', alex: 'male', anna: 'female'}

class Students {
  // interface에서 indexable property와 비슷하다.
  [index: string]: "male" | "female";

  // mark = "hello"
  mark1: "male" = "male" // male라는 타입을 가지고 그 값이 male이라는 뜻이다.
}

const aClass = new Students();
aClass.mark = 'male'
aClass.jade = 'male'
console.log(aClass)

const bClass = new Students()
bClass.chloe = 'female'
bClass.alex = 'male'
bClass.anna = 'female'
console.log(bClass)


