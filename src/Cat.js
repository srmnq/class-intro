import Animal from './Animal'

export default class Cat extends Animal {
  constructor({ name = 'Hank', age, lives = 9 }) {
    super({ name, age })
    this.lives = lives
  }

  speak() {
    console.log(this.name + ' says: Meow')
    super.speak()
  }

  kill() {
    console.log(this.name + ' kills.')
  }
}
