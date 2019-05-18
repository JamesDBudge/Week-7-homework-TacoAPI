const PubSub = require('../helpers/pub_sub.js')

const TacoComponentView = function(container, taco) {
  this.container = container
  this.taco = taco
}

TacoComponentView.prototype.bindEvents = function () {
  PubSub.subscribe('Tacos:taco-ready', (event) => {
    console.log(event.detail);
    this.renderTacoComponents(event.detail)
  })
}

TacoComponentView.prototype.renderTacoComponents = function (fullTaco) {
  // const components = document.querySelector('taco-components')

  const baselayer = this.createBaseLayer(fullTaco)
  this.container.appendChild(baselayer)

  const mixin = this.createMixin(fullTaco)
  this.container.appendChild(mixin)

  const seasoning = this.createSeasoning(fullTaco)
  this.container.appendChild(seasoning)

  const shell = this.createShell(fullTaco)
  this.container.appendChild(shell)

  const condiment = this.createCondiment(fullTaco)
  this.container.appendChild(condiment)

  

};

TacoComponentView.prototype.createBaseLayer = function (taco) {
  const baseLayer = document.createElement('h4')
  baseLayer.classList.add('base-layer')
  baseLayer.textContent = taco.base_layer.name
  return baseLayer
};

TacoComponentView.prototype.createMixin = function (taco) {
  const mixin = document.createElement('h4')
  mixin.classList.add('base-layer')
  mixin.textContent = taco.mixin.name
  return mixin
};

TacoComponentView.prototype.createSeasoning = function (taco) {
  const seasoning = document.createElement('h4')
  seasoning.classList.add('base-layer')
  seasoning.textContent = taco.seasoning.name
  return seasoning
};

TacoComponentView.prototype.createShell = function (taco) {
  const shell = document.createElement('h4')
  shell.classList.add('base-layer')
  shell.textContent = taco.shell.name
  return shell
};

TacoComponentView.prototype.createCondiment = function (taco) {
  const condiment = document.createElement('h4')
  condiment.classList.add('base-layer')
  condiment.textContent = taco.condiment.name
  return condiment
};

module.exports = TacoComponentView
