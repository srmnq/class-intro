import Dog from './Dog'
import Eye from './Eye'

export default class World {
  constructor() {
    this.makeNewDog()
  }

  makeNewDog() {
    new Dog({})
    setTimeout(() => this.makeNewDog(), 10000)
  }
}
