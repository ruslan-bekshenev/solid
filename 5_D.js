/**
 * Dependency inversion principle
 *
 * модули верхних уровней не должны зависеть от модулей нижних уровней,
 * а оба типа модулей должны зависеть от абстракций;
 * сами абстракции не должны зависеть от деталей, а вот детали должны зависеть от абстракций.
 * */

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()

  }

  clientGet() {
    return this.localStorage.get()
  }
}

class Database {

  constructor(client) {
    // this.fetch = new Fetch()
    // this.localStorage = new LocalStorage()
    this.client = client
  }

  getData(key) {
    // return this.fetch.request('vk.com')
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'));