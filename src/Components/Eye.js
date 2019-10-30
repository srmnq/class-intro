import Entity from './Entity'

export default class Eye extends Entity {
  constructor({ target }) {
    super({ target, className: 'eye' })
  }
}
