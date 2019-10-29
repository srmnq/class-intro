export default class Animal {
  constructor({ name = 'animal', age } = {}) {
    this.name = name
    this.age = age
    this.speak()
    this.render()
  }

  render() {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.left = Math.random() * 90 + 'vw'
    box.style.backgroundColor = `hsl( ${Math.random() * 360}, 70%,70%)`
    box.textContent = this.name
    document.body.appendChild(box)
  }

  speak() {
    console.log(this.name + ' speaks.')
  }
}
