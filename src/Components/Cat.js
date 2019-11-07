import Entity from './Entity'
import Eye from './Eye'
import Leg from './Leg'
import SpeechBubble from './SpeechBubble'

export default class Cat extends Entity {
  constructor({ name = 'Hank', age, lives = 9, color }) {
    super({ name, age, className: 'cat' })
    this.createLegs()
    this.createEyes()
    this.setPosition()
    this.lives = lives
    this.handleClick()
  }

  createLegs() {
    new Leg({ target: this.el, color: 'blue' })
    new Leg({ target: this.el, color: 'red' })
  }

  setPosition() {
    this.el.style.left = Math.random() * 90 + 'vw'
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
  handleClick() {
    this.el.addEventListener('click', () => {
      new SpeechBubble({ target: this.el, name: 'Cat', text: 'Meow' })
    })
  }
}
