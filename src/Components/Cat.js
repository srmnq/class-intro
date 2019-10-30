import Animal from './Entity'
import Eye from './Eye'

export default class Cat extends Animal {
  constructor({ name = 'Hank', age, lives = 9 }) {
    super({ name, age, className: 'cat' })
    this.createEyes()

    this.lives = lives
  }

  createEyes() {
    new Eye({ target: this.el })
    new Eye({ target: this.el })
  }

  speak() {
    console.log(this.name + ' says: Meow')
    super.speak()
  }

  kill() {
    console.log(this.name + ' kills.')
  }
}
