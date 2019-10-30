import Entity from './Entity'

export default class Eye extends Entity {
  constructor(props) {
    super({ ...props, className: 'eye' })
  }
}
