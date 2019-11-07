import Entity from './Entity'

export default class Leg extends Entity {
  constructor({ target, translateCoordinate, color }) {
    super({ target, className: 'leg', translateCoordinate })
    //this.setPosition()
    //this.translateCoordinate = translateCoordinate
    this.setColor()
    this.color = color
  }
  //   setPosition() {
  //     this.el.style.transform =
  //       'translate(' + this.translateCoordinate + 'px,100%)'
  //   }

  setColor() {
    this.el.style.backgroundColor = this.color
  }
}
