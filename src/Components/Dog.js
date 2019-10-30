import Animal from './Entity'
import Eye from './Eye'

export default class Dog extends Animal {
  constructor({ name = 'Caya', target }) {
    super({ name, target, className: 'dog' })
    new Eye({ target: this.box })
    new Eye({ target: this.box })
  }

  speak() {
    console.log(this.name + ' says: woof')
  }

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }
}
