import Entity from './Entity'
import Eye from './Eye'
import SpeechBubble from './SpeechBubble'

export default class Dog extends Entity {
  constructor(props) {
    super({
      ...props,
      name: 'Caya',
      className: 'dog',
    })
    this.createEyes()
    this.addClickLogic()
    this.setPosition()
  }

  createEyes() {
    new Eye({ target: this.el })
    new Eye({ target: this.el })
  }

  setPosition() {
    this.el.style.left = Math.random() * 90 + 'vw'
  }

  addClickLogic() {
    this.el.addEventListener('click', () => {
      new SpeechBubble({ target: this.el, text: this.name + ' says: woof' })
    })
  }

  //speak() {
  // this.el.textContent = this.name + ' says: woof'
  //}

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }
}
