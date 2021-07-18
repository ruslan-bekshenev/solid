/**
 * Liskov substitution principle
 *
 * Цель этого принципа заключаются в том, чтобы классы-наследники могли бы использоваться вместо родительских классов,
 * от которых они образованы, не нарушая работу программы.
 * Если оказывается, что в коде проверяется тип класса, значит принцип подстановки нарушается.
 * */

class Person {
}

class Member extends Person{
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {

  }
}

class Backend extends Member {
  canCreateBackend() {

  }
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('У тебя нет доступа! Иди к себе!')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())  // There should be member


// other example

class Component {
  isComponent = true
}

class HighOrderComponent extends Component {}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterinit() {}
}

class HOC extends HighOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }
  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(new HOC())