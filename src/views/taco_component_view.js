const PubSub = require('../helpers/pub_sub.js')
const TacoComponentPopulate = require('./taco_component_populate.js')

const TacoComponentView = function(container) {
  this.container = container
}

TacoComponentView.prototype.bindEvents = function () {
  PubSub.subscribe('Tacos:taco-ready', (event) => {
    console.log(event.detail);
    this.renderTacoComponents(event.detail)
  })
}

TacoComponentView.prototype.renderTacoComponents = function (fullTaco) {

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
  const baseRecipe = document.createElement('p')

  return baseLayer
};

TacoComponentView.prototype.createMixin = function (taco) {
  const mixin = document.createElement('h4')
  mixin.classList.add('mixin')
  mixin.textContent = taco.mixin.name
  return mixin
};

TacoComponentView.prototype.createSeasoning = function (taco) {
  const seasoning = document.createElement('h4')
  seasoning.classList.add('seasoning')
  seasoning.textContent = taco.seasoning.name
  return seasoning
};

TacoComponentView.prototype.createShell = function (taco) {
  const shell = document.createElement('h4')
  shell.classList.add('shell')
  shell.textContent = taco.shell.name
  return shell
};

TacoComponentView.prototype.createCondiment = function (taco) {
  const condiment = document.createElement('h4')
  condiment.classList.add('condiment')
  condiment.textContent = taco.condiment.name
  return condiment
};

module.exports = TacoComponentView
