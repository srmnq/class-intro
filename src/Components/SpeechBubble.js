import Entity from './Entity'

export default class SpeechBubble extends Entity {
  constructor(props) {
    super({ ...props, className: 'speechbubble' })
    this.text = props.text
    this.speak()
  }

  speak() {
    this.el.textContent = this.text
  }
}
