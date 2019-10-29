import Animal from './Animal'

export default class Dog extends Animal {
  speak() {
    console.log(this.name + ' says: woof')
  }

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }
}
