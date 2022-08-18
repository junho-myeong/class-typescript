// abstract class
// 완전하지 않은 클래스를 표현할수 잇다.

abstract class AbstractPerson {
  protected _name: string = 'mark'

  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name
  }

}

const p1101 = new Person()

p1101.setName('junho')