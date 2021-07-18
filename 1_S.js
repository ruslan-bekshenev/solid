/**
 * Single Responsibility Principle
 * Принцип единственной обязанности / ответственности (single responsibility principle / SRP) обозначает,
 * что каждый объект должен иметь одну обязанность и эта обязанность должна быть полностью инкапсулирована в класс.
 * Все его сервисы должны быть направлены исключительно на обеспечение этой обязанности.
 * */
class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
    <div class="news">
      <h1>${this.news.title}</h1>
      <p>${this.news.text}</p>
    </div>
  `
  }
  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2)
  }
  xml() {
    return `
      <news>
        <title>{this.news.title}</title>
        <text>{this.news.text}</text>
      </news>
    `
  }
}

const news = new News('Путин', 'Новая конституция')

const printer = new NewsPrinter(news)

console.log(printer.html())
console.log(printer.json())
console.log(printer.xml())