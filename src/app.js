const Tacos = require('./models/tacos.js');
const TacoComponentView = require('./views/taco_component_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const tacoComponents = document.querySelector('#taco-components')
  const componentView = new TacoComponentView(tacoComponents)
  componentView.bindEvents()





  const taco = new Tacos;
  // taco.bindEvents();
  taco.getData();
})
