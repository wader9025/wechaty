
class Contact {
  constructor(id) {
    this.id = id
  }

  toString() {
    return `Contact({id:${this.id})`
  }

  getId() { return this.id }

  send(message) {
    
  }

  static find() {
  }

  static findAll() {
  }
}

module.exports = Contact
