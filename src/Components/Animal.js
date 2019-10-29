export default class Animal {
  constructor({
    name = 'animal',
    age,
    target = document.body,
    className,
  } = {}) {
    this.name = name
    this.age = age
    this.target = target
    this.className = className
    this.speak()
    this.render()
  }

  render() {
    const box = document.createElement('div')
    box.classList.add(this.className)
    box.style.left = Math.random() * 90 + 'vw'
    box.style.backgroundColor = `hsl( ${Math.random() * 360}, 70%,70%)`
    box.textContent = this.name
    this.target.appendChild(box)
  }

  speak() {
    console.log(this.name + ' speaks.')
  }
}
