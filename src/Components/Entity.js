export default class Entity {
  constructor({ name = 'animal', target = document.body, className } = {}) {
    this.name = name
    this.target = target
    this.className = className
    this.render()
  }

  render() {
    const box = document.createElement('div')

    box.classList.add(this.className)

    box.style.left = Math.random() * 90 + 'vw'
    box.style.backgroundColor = `hsl( ${Math.random() * 360}, 70%,70%)`
    this.target.appendChild(box)
    this.box = box
  }
}
