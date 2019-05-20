const TacoComponentPopulate = function (container, taco) {
  this.viewContainer = container
  this.taco = taco

}

TacoComponentPopulate.prototype.render = function () {
  const summary = document.createElement('summary')
  summary.classList.add('recipe')

  const content = this.sectionName()
  container.appendChild(content)
};

TacoComponentPopulate.prototype.sectionName = function () {
  const name = this.taco.name

};


module.exports = TacoComponentPopulate
