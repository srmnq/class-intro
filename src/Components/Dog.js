import Animal from './Entity'
import Eye from './Eye'
import SpeechBubble from './SpeechBubble'

export default class Dog extends Animal {
  constructor({ props }) {
    super({ ...props, name: 'Caya', className: 'dog' })
    this.createEyes()
    this.handleClick()
    this.setPosition()
  }

  createEyes() {
    new Eye({ target: this.el })
    new Eye({ target: this.el })
  }
  setPosition() {
    this.el.style.left = Math.random() * 90 + 'vw'
  }

  handleClick() {
    this.el.addEventListener('click', () => {
      new SpeechBubble({ target: this.el })
    })
  }

  speak() {
    console.log.textContent = this.name + ' says: woof'
  }

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }
}
