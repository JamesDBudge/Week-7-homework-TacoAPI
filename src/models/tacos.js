const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Tacos = function () {
  this.tacosData = [];
}

// Tacos.prototype.bindEvents() = function () {
//   PubSub.subscribe('RandomButton:click', (event) => {
//     const fullTacoData = event.detail;
//     this.publishTacoData(fullTacoData)
//   });
// };

Tacos.prototype.getData = function () {
  const request = new RequestHelper('http://taco-randomizer.herokuapp.com/random/')
  request.get().then((data) => {
    this.tacosData = data
    PubSub.publish('Tacos:taco-ready', this.tacosData)
  })
};


module.exports = Tacos
