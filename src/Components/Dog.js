import Animal from './Animal'

export default class Dog extends Animal {
  constructor({ name = 'Caya', target }) {
    super({ name, target, className: 'dog' })
    this.lives = lives
  }

  speak() {
    console.log(this.name + ' says: woof')
  }

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }
}
