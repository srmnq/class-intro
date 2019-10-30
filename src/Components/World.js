import Dog from './Dog'
import Cat from './Cat'
import Eye from './Eye'

export default class World {
  constructor() {
    this.makeNewDog()
    this.makeNewCat()
  }

  makeNewDog() {
    new Dog({})
    setTimeout(() => this.makeNewDog(), 10000)
  }
  makeNewCat() {
    new Cat({})
    setTimeout(() => this.makeNewCat(), 100000)
  }
}
