export default class Entity {
  constructor({ name = 'animal', target = document.body, className } = {}) {
    this.name = name
    this.target = target
    this.className = className
    this.render()
  }

  render() {
    const el = document.createElement('div')

    el.classList.add(this.className)

    //el.style.backgroundColor = `hsl( ${Math.random() * 360}, 70%,70%)`
    this.target.appendChild(el)
    this.el = el
  }
}
