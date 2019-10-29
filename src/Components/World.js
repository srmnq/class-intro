import Dog from './Dog'

export default class World {
  constructor() {
    this.makeNewDog()
  }

  makeNewDog() {
    new Dog({})
    setTimeout(() => this.makeNewDog(), 10000)
  }
}
